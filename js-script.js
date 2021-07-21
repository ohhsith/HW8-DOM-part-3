console.log('------------- #3')
function showNum(a,b) {
    console.log(a);
    a++;
    if (a > b){
        return;
    }
    showNum(a,b);
}
showNum(2,5);

console.log('------------- #4')

let time = document.querySelector('.time');
let showFullTime = true;

let int = setInterval(function(){
    let now = new Date();
    let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds(); 
    showFullTime ? time.innerHTML=`${hours}:${minutes}:${seconds}`: time.innerHTML=`${hours}:${minutes}`;
}, 1000);

time.addEventListener('click', () =>{
    showFullTime = !showFullTime;
});






