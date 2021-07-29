// index.js
import { add, subtract } from './math'
import { default as myts } from './MyTs'

let result = add(5, 3)
console.log('5 + 3 : ', result)
result = subtract(5, 3)
console.log('5 = 3 : ', result)

console.log('typescript module : ', myts);

import('./runtime').then( m => {
    console.log('runtime loaded ', m);
})


import('./MyTsRuntime').then( m => {
    console.log('MyTsRuntime loaded ', m);
})


import('./es6').then( m => {
    console.log('es6 loaded ', m);
})