console.log('This is Module')
function average(list) {
    let sum=0;
    list.forEach(element => {
        sum+=element;
    });
    return sum/list.length;
}
// list=[1,2,3,4];
// console.log(average(list))
module.exports= {
    avg:average,
    name:'Tamal',
    repo:'GitHub'
};