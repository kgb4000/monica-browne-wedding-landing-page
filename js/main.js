const year = new Date();

let date = year.getFullYear();

console.log(date);

document.querySelector("#date").innerHTML = `Monica Browne Weddings &copy;${date}`;

$(document).ready(function(){
  $('.slider').bxSlider({
    controls: false
  });
  
});