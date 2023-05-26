var start=100
var end=500
var target=345
function number(start,end,target){
    if(target>=start && target<=end){
        for(var i=start;i<=end;i++){
            console.log(i)
        }
    }
    else{
        console.log("target is out of range")
    }
}
number(start,end,target);