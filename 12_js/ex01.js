function fun1() { }

const fun2 = function () { }

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.say = function () { return 'Oops' }
console.log(obj.say())

function run(fun) {
    fun()
}

run(function () { console.log('Executing...') })

function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(4, 5)(6)