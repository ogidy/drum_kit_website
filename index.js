/*
document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    alert('Button clicked!');
}
*/

/*
for (let i = 0; i > document.querySelectorAll("button").length; i++) {
    document.querySelector('button').addEventListener('click', handleClick);

    function handleClick() {
        alert('Button clicked!');
    }
}

*/

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});