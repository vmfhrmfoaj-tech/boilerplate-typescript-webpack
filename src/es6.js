
const arr = [];

const promiseFn = (resolve, reject) => {
    setTimeout(()=>{
        resolve();
    }, 300);
};

var sym = Symbol(promiseFn);
// var promise = new Promise();
var map = new Map();
var check = arr.includes("yeah!");
console.log(arr[Symbol.iterator]());


async function asyncfn(){
    const module = await import('./runtime');

    console.log('asyncfn loaded', module);
}

asyncfn();

console.log('Promise Object : ', new Promise(promiseFn));