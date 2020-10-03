let binaryNumber = document.getElementById("binaryNumber");

let convertButton = document.getElementById("convert");
convertButton.disabled=true;

convert =  ()=> {
    let length = binaryNumber.value.length;
    let decimal=0;
    for(let index=0; index <binaryNumber.value.length; index++){
        if(binaryNumber.value[index] == 1){
            decimal+=Math.pow(2,length-1);
        }
        length--;
    };
    document.getElementById("decimalNumber").value = decimal
    console.log(decimal);
}

function checkValue(value){
    let input = value[value.length-1];
    if(!(input==='0' || input==='1')){
        document.getElementById("binaryNumber").value = value.substring(0,value.length-1);
    }
    if(value){
        convertButton.disabled=false;
    }else{
        convertButton.disabled=true;
    }
    
}

function reset(){
    document.getElementById("binaryNumber").value = "";
    document.getElementById("decimalNumber").value = "";
    convertButton.disabled=true;
}
