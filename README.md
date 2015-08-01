inheritancejs
========

Simple utility for implementing javascript inheritance

## Install


`npm install inheritancejs`


## Usage

```javascript
var extend = require('inheritancejs');

function Base(name, age){
    this.name = name;
    this.age = age;
}
Base.prototype.state = function() {
    return {
        name: this.name,
        age: this.age
    };
};
Base.prototype.log = function() {
    console.log(this.state());
}

function ExtendConstructor(name, age, sex){
    this.sex = sex;
}


function Extend = extend(Base, ExtendConstructor);
Extend.prototype.state = function() {
    var p = this.parent.state.call(this);
    p['sex'] = this.sex;
    return p;
}

var myObject = new Extend('a', 10, 'm');
myObject.log(); // output {name: "a", age: 10, sex: "m"}


```


