var fact1 = "Every 'c' in Pacific Ocean is pronounced differently.";
var fact2 = "Every 60 seconds in an African Savannah, a minute passes in the real world...";
var fact3 = "The nonsense phrase 'umop apisdn' is 'upside down' spelled upside down.";
var fact4 = "If you folded a piece of paper 42 times, it would be thick enough to reach the moon.";
var fact5 = "A majority of the Sahara Desert is covered in gravel.";

document.querySelector('a').addEventListener("click", fact1);

function facta(){
	
document.getElementById("factdisplay").innerHTML = fact1  + "<img src='images/ocean.jpg' alt='Pacific Ocean'>";
document.querySelector('main').style.borderColor = "#A3D5FF";
document.querySelector('#factdisplay').style.color = "#6F73D2";
document.querySelector('body').style.backgroundColor = "#83C9F4";
document.querySelector('form').style.borderColor = "#3BF4FB";
document.querySelector('main').style.backgroundColor = "#118AB2";
document.querySelector('#factdisplay').style.borderColor = "#6F73D2";
}

document.querySelector('b').addEventListener("click", fact2)  

function factb(){
	
document.getElementById("factdisplay").innerHTML = fact2 + "<img src='images/africa.jpg' alt='Savannah'>";
document.querySelector('main').style.borderColor = "#EABE7C";
document.querySelector('#factdisplay').style.color = "#DD6031";
document.querySelector('body').style.backgroundColor = "#FF7F11";
document.querySelector('form').style.borderColor = "#FFD166";
document.querySelector('main').style.backgroundColor = "#EFA00B";
document.querySelector('#factdisplay').style.borderColor = "#D65108";
}

document.querySelector('c').addEventListener("click", fact3);

function factc(){
	
document.getElementById("factdisplay").innerHTML = fact3 + "<img src='images/man.jpg' alt='upside Down'>";
document.querySelector('main').style.borderColor = "#826AED";
document.querySelector('#factdisplay').style.color = "#C879FF";
document.querySelector('body').style.backgroundColor = "#FFB7FF";
document.querySelector('form').style.borderColor = "#CAFF8A";
document.querySelector('main').style.backgroundColor = "#3BF4FB";
document.querySelector('#factdisplay').style.borderColor = "#FFB7FF";
}

document.querySelector('d').addEventListener("click", fact4);

function factd(){
	
document.getElementById("factdisplay").innerHTML = fact4 + "<img src='images/fold.jpg' alt='Paper Fold'>";
document.querySelector('main').style.borderColor = "#FF499E";
document.querySelector('#factdisplay').style.color = "#D264B6";
document.querySelector('body').style.backgroundColor = "#A480CF";
document.querySelector('form').style.borderColor = "#779BE7";
document.querySelector('main').style.backgroundColor = "#49B6FF";
document.querySelector('#factdisplay').style.borderColor = "#49B6FF";
}

document.querySelector('e').addEventListener("click", fact5);

function facte(){
	
document.getElementById("factdisplay").innerHTML = fact5  + "<img src='images/desert.jpg' alt='Sahara Desert'>";
document.querySelector('main').style.borderColor = "#F63E02";
document.querySelector('#factdisplay').style.color = "#E57C04";
document.querySelector('body').style.backgroundColor = "#FAA300";
document.querySelector('form').style.borderColor = "#FF6201";
document.querySelector('main').style.backgroundColor = "#F3B700";
document.querySelector('#factdisplay').style.borderColor = "#E57C04";
}