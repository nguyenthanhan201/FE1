const captchar = document.querySelector('#captchar');
const captchar1 = document.querySelector('.captchar1');
const form = document.querySelector('form');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
let x = getRandomIntInclusive(1000,9999);

captchar1.innerHTML = "Captchar: " + x
captchar.pattern = x;

form.onsubmit = (e) => {
    if (form.checkValidity() === false) {
        e.preventDefault();
    }
    form.classList.add('was-validated');
};
