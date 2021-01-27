console.log('Start');
setTimeout(() => console.log('Take a break...'), 0);
console.log('Stop');


//10 time 10
for(var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);    
}


//09 block level scope for i
for(let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);    
}


//09 script/global level scope for i
// let i;
// for(i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 0);    
// }