const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        else if (e.target.id === 'green') {
            body.style.backgroundColor = 'green';
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else if (e.target.id === 'orange'){
            body.style.backgroundColor = 'orange';
        }
        else if (e.target.id === 'purple'){
            body.style.backgroundColor = 'purple';
        }
        else if (e.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        else if (e.target.id === 'sky'){
            body.style.backgroundColor = 'sky';
        }
    }
    );
}
);
