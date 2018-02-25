

function print(val){
    setTimeout(function(){
        console.log(val,"Print()");
    },1000)
    
}

function process(){

  for(var i=0;i<10;i++){
    print(i);
  }

  for(var n=0;n<10;n++){
      (function(val){
        setTimeout(function(){
            console.log(val ,"IIFE");
        },1000)
      })(n);
  }



    for(let k=0;k<10;k++){
        setTimeout(function(){
            console.log(k, "Let");
        },1000)
    }
}

process();