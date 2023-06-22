document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("7b").addEventListener("click", () => (des(7)));
document.getElementById("8b").addEventListener("click", () => (des(8)));
document.getElementById("9b").addEventListener("click", () => (des(9)));
document.getElementById("4b").addEventListener("click", () => (des(4)));
document.getElementById("5b").addEventListener("click", () => (des(5)));
document.getElementById("6b").addEventListener("click", () => (des(6)));
document.getElementById("1b").addEventListener("click", () => (des(1)));
document.getElementById("2b").addEventListener("click", () => (des(2)));
document.getElementById("3b").addEventListener("click", () => (des(3)));
document.getElementById("0b").addEventListener("click", () => (des(0)));
document.getElementById("+b").addEventListener("click", ()=> des("+"));
document.getElementById("-b").addEventListener("click", ()=> des("-"));
document.getElementById("/b").addEventListener("click", ()=> des("/"));
document.getElementById("*b").addEventListener("click", ()=> des("*"));
document.getElementById("remove").addEventListener("click", ()=> remove());
function calculate(){
    var input = document.getElementById("textField").value
    const value = eval(input)
    document.getElementById("textField").value=value
}

function des(val){

    document.getElementById("textField").value+=val
}
function remove(){
    const arr = document.getElementById("textField");
    if(arr!== ''){
    arr.value = ''; 
    window.alert('Data is removed..');
    }else if(arr ===''){
        alert('Data is not inserted');
    }else{
        return "";
    }
}
// const elementsByClass = document.getElementsByClassName('onebyone');
// if (elementsByClass.length > 0) {
//   for (let i = elementsByClass.length - 1; i >= 0; i--) {
//     elementsByClass[i].remove(); // Removes each element with the specified class
//   }
// }