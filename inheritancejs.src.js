function inherit(Parent, Constructor) {
    if (Parent == undefined) {
        throw 'Parent class not defined';
    }
    var Child = function() {
        Parent.apply(this, arguments);
        if (Constructor) {
            Constructor.apply(this, arguments);
        }
    };
    Child.prototype = new Parent();
    Child.constructor = Child;
    Child.prototype.parent = Parent.prototype;
    return Child;
}


module.exports = inherit;
