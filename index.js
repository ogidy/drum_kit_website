/*
document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    alert('Button clicked!');
}

function changeColor() {
    document.querySelector('button').style.backgroundColor = 'white';
}
*/


for (let i = 0; i < document.querySelectorAll("button").length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

    function handleClick() {
        // alert('Button clicked!');
        this.style.color = 'white';
    }
}



// document.querySelectorAll('.drum').forEach(button => {
//     button.addEventListener('click', () => {
//         this.StylePropertyMap.color = 'white';
//     });
// });





//  var audio = new Audio('./sounds/tom-1.mp3');
//         audio.play();