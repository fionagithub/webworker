// Code goes here

postMessage('hello');

//实现之前的一个实例，看是否阻塞
setTimeout(function () { console.log('---end 2'); }, 2000);
setTimeout(function () { console.log('-----end 1'); }, 100);
console.log('---end');