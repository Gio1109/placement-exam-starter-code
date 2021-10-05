// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Giovanni Guzman" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   //total

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
//ginger bread
document.getElementById('add-gb').addEventListener('click', function() {

    console.log('Ginger bread + button was clicked!')

  gb = gb + 1
document.getElementById('qty-gb').textContent = gb
total = total + 1
document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1
    document.getElementById('qty-gb').textContent = gb
    total = total - 1
    document.getElementById('qty-total').textContent = total;
})
// Chocolate Chip
document.getElementById('add-cc').addEventListener('click', function(){
    cc = cc + 1;
    document.getElementById('qty-cc').textContent = cc;
    total = total + 1;
    document.getElementById('qty-total').textContent = total;
})
document.getElementById('minus-cc').addEventListener('click', function(){
    cc = cc - 1;
    document.getElementById('qty-cc').textContent = cc;
    total = total - 1;
    document.getElementById('qty-total').textContent = total;
})
// Sugar cookie
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar = sugar + 1;
    document.getElementById('qty-sugar').textContent = sugar;
    total = total + 1;
    document.getElementById('qty-total').textContent = total;
})
document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar = sugar - 1;
    document.getElementById('qty-sugar').textContent = sugar;
    total = total - 1;
    document.getElementById('qty-total').textContent = total;
})