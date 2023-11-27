// const a = {
//     b: 'hi',
//     c: 5,
//     d: true
// }
// JSON.stringify(a)

// console.log(JSON.stringify(a))

// const aStringify = JSON.stringify(a)

// JSON.parse(aStringify)

// console.log(JSON.parse(aStringify))

//-------------------------------------------------------------//

// const a = {
//     b:'hi',
//     c: 5,
//     d: {
//         e:'buy',
//         f: true
//     }
// }

// console.log(a)

// const aCopy = JSON.parse(JSON.stringify(a))

// console.log(aCopy)

// aCopy.c = 10
// aCopy.d.f = false

// console.log(a)
// console.log(aCopy)


//-------------------------------------------------------------//

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a+ b
//     return c
// }
// let result = myFn(10, 3)
// console.log(result)

//-------------------------------------------------------------//

// const user = {
//     name: 'Dima',
//     age: 20
// }

// function changeUserAge(person) {
//     const userCopy = JSON.parse(JSON.stringify(person))
//     userCopy.age += 2
//     return userCopy
// }

// const userCopyTwo = changeUserAge(user)

// console.log(user.age)
// console.log(userCopyTwo.age)

//-------------------------------------------------------------//


// function writeMyName() {
//     console.log('Artem')
// }
// console.log('Start')
// setTimeout(writeMyName, 2000)

//-------------------------------------------------------------//

// const a = 5

// function myFn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }
// myFn()

//-------------------------------------------------------------//

// let a
// let b 

// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log(a)
// }

// myFn()

// console.log(a)
// console.log(b)

//-------------------------------------------------------------//

// 'use strict'

 
