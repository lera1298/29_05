function ibg(){
let ibg=document.querySelectorAll(".ibg"); 
for (var i = 0; i < ibg.length; i++) 
	{ if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } } 
}
ibg();
 function ibg(){
$.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } }); 
}
ibg();
// скролл страницы


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.section-conteiner');

for (let elm of elements) {
  observer.observe(elm);
}



//accordion
var coll = document.getElementsByClassName("black-main__info__btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//english
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.footer_conteiner_col__btn__dropbtn')) {
    var dropdowns = document.getElementsByClassName("footer_conteiner_col__btn__conteiner");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// let a =document.querySelector('.shoes-block__item');
// a.onmouseover = function(e) {
//   document.getElementById('blc').style.display = 'block';
// }
// a.onmouseout = function(e){
//   document.getElementById('blc').style.display = 'none';
// }


