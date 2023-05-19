const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});




function turnOn() {
  var lightBulb = document.getElementById("lightBulb");
  lightBulb.style.backgroundColor = "yellow";
}

function turnOff() {
  var lightBulb = document.getElementById("lightBulb");
  lightBulb.style.backgroundColor = "gray";
}






function espesorANegrita(elemento) {
    elemento.style.fontWeight = "bold";
  }
  
  function espesorANormal(elemento) {
    elemento.style.fontWeight = "normal";
  }
  
 


/*

function turnOn() {
  var bulb = document.getElementById("lightBulb");
  bulb.classList.add("on");
}

function turnOff() {
  var bulb = document.getElementById("lightBulb");
  bulb.classList.remove("on");
}

$(document).ready(function() {
  $('.question').click(function() {
    $(this).siblings('.answer').slideToggle();
    $(this).find('.arrow').toggleClass('rotate');
  });
});
*/




  
  