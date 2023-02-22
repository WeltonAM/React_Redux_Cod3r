console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.sayHello = function () {
    console.log('Hello')
}