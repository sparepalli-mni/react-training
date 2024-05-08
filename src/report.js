export function getReport() {
    console.log("one");
} 

function square(num) {
    return num*num
}

var x = (num)=>num*num;

class Abc {
    getData() {
        console.log("this value",this)
        setTimeout(()=> {
            console.log("this value",this)
        },0)
        setTimeout(function(){
            console.log("this value",this)
        },0)
    }
}

var obj1 = new Abc();
obj1.getData();