//given an array find which number are greater than given target
var array =[5,11,65,27,3,7,9,15,54,52,77,121];
var target =15;
function findlargenumber(array,target){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>target){
            //console.log(array[i])
            count++;
        }
    }
    console.log(count)
}
findlargenumber(array,target);
//var myname='pratiksha';
//myname='irise';
//var myname='hello'
//console.log(myname)


//let change='xyz';
//change=`pihu`;
//let change=`sam`;
//console.log(change)

//const anyname=`swaraj`;
//anyname='shiv';
//const anyname='radha';
//console.log(anyname);