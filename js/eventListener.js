//system4
const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//system4 another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});


//system4 another again
const skyblueButton = document.getElementById("make-skyblue");
skyblueButton.addEventListener("click", function(){
  document.body.style.backgroundColor = "skyblue";
});