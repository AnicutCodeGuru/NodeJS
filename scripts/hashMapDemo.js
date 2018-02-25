
function printColor(a,b){
    var colorMap={
        "1" : {
            "A" : "BLUE",
            "B" : "RED"
        },
        "2" : {
            "A" : "GREEN",
            "B" : "YELLLOW"
        }
    }

    console.log(colorMap[a][b]);
   
}

printColor(1,"A");
printColor(1,"B");
printColor(2,"A");
printColor(2,"B");


function countNumbers(array){
    var countMap={};
    
    for(let i=0;i<array.length;i++){
        if(countMap[array[i]] === undefined){
            countMap[array[i]]=1;
        }else{
            countMap[array[i]]++;
        }
    }

    return countMap;

}


var values = [1,2,1,1,2,3,3,1,1,2,10,10,1,11,11,11];

var response = countNumbers(values);

console.log(response)







