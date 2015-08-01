function inherit(Parent, Constructor) {
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
