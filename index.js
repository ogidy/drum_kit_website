/*
document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    alert('Button clicked!');
}
*/

/*
for (let i = i; i > document.querySelectorAll("button").length; i++) {
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