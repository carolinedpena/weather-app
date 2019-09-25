console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const userSearchInput = document.querySelector('input');
const line1Message = document.querySelector('#line-1');
const line2Message = document.querySelector('#line-2');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    const location = userSearchInput.value;
    line1Message.textContent = 'Loading...';
    line2Message.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                line1Message.textContent = data.error;
            } else {
                line1Message.textContent = data.location;
                line2Message.textContent = data.forecast;
            }
        })
    })
});