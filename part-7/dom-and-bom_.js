//example 1

document
.getElementById('changeText')
.addEventListener('click', function() {
    let text = document.getElementById('text')
    text.textContent = 'Text changed!';
});

//example -2  -->

document
.getElementById('highlightFirstCity').addEventListener('click' , function() {
    let firstCity = document.getElementById('citiesList');

    firstCity.firstElementChild.classList.add('highlight');
});

//example -3 

document
.getElementById('changeOrder')
.addEventListener('click', function(){
    let order = document.getElementById('coffeeType');
    order.textContent = 'Expresso';
    order.style.backgroundColor = 'red';
    order.style.textDecoration = 'underline';
    order.style.letterSpacing = '5px';
    order.style.fontSize = '15px';
    order.style.padding = '5px';
});

//example-4

document
.getElementById('addCity')
.addEventListener('click', function() {
    let newCity = document.createElement('li');
    newCity.textContent = 'Berlin';
    newCity.classList.add('highlight');
    document.getElementById('citiesList2').appendChild(newCity);
});

//example-5

document
.getElementById('removeCity')
.addEventListener('click', function() {
    let citiesList = document.getElementById('citiesList2');
    if (citiesList.lastElementChild) {
        citiesList.removeChild(citiesList.lastElementChild);
    }
});

//example-6

document
.getElementById('showAlert')    
.addEventListener('click', function() {
    alert('This is an alert message!');
});

//example-7

document
.getElementById('changeColor')
.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'red';

});


//example -8

document
.getElementById('userForm')
.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('username').value;
    
document.getElementById('formMessage').textContent = `username : ${name} has been submitted successfully!`;
    document.getElementById('formMessage').style.color = 'green';   
    document.getElementById('formMessage').style.fontSize = '20px';
    document.getElementById('formMessage').style.fontWeight = 'bold';
});

//exapmle -9

document
.addEventListener('DOMContentLoaded', function() {
    document.getElementById('domStatus').textContent = 'DOM is fully loaded and parsed!';
});

//example-10

document
.getElementById('toggleHighlight')    
.addEventListener('click', function() {
    let element = document.getElementById('textToStyle');
    element.classList.toggle('highlight');
});
    