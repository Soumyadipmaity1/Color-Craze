const buttons1 = document.querySelectorAll('.button');
const buttons2 = document.querySelectorAll('.Defaultbutton');

const body = document.querySelector("body");
buttons1.forEach((button) => {
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
        else if (e.target.id === 'brown') {
            body.style.backgroundColor = '#2e1717';
        }
        else if (e.target.id === 'orange'){
            body.style.backgroundColor = '#ff7b00';
        }
        else if (e.target.id === 'purple'){
            body.style.backgroundColor = 'purple';
        }
        else if (e.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        else if (e.target.id === 'sky'){
            body.style.backgroundColor = '#87ceeb';
        }

    }
    );
}
);

buttons2.forEach((button) => {
    button.addEventListener('click', (d)=>
    {
        if(d.target.id === 'default')
        {
            body.style.backgroundColor = 'black';
        }
    });
})

