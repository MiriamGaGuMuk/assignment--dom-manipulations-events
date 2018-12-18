// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

let i = 0
document.querySelector(".answer-box button").addEventListener('click',function(){
    i ++
    let navMenu = document.querySelector(".nav-menu");
    // console.log(navMenu);
    let button = document.querySelector(".answer-box button");
    // console.log(button.textContent);
    if (i%2 !== 0) {
    // navMenu.style.visibility ='hidden'
    button.textContent = "Hide nav"
    }
    else {
    // navMenu.style.visibility ='visible'
    button.textContent = "Show nav"
    }
    // cambiar clases
    navMenu.classList.toggle("nav-menu-hidden")
})


/* TASK 2 -- Select/Deslect an Icon */
let divTag = document.querySelectorAll(".wish-list div")
function changeClass (){
  let currenElement = this
  console.log(currenElement);
  currenElement.classList.toggle("selected")
}
let divCollection = [...divTag] 
  for (let i = 0; i < divCollection.length; i++) {
    let button = divCollection[i]
    button.addEventListener('click', changeClass)
  }

/* TASK 3 -- Increase total number*/
let totalpoints = document.querySelectorAll('#add-vals button');

for (let i = 0; i < selector.length; i++) {

    totalpoints[i].addEventListener('click', function(evt) {

    let increment = parseInt(evt.currentTarget.textContent);

    let current = parseInt(document.querySelector('#add-vals .total-points').textContent);

    document.querySelector('#add-vals .total-points').textContent = current + increment;
  });
}


/* TASK 4 (Adventure Mode)-- Move Item List to List */
let selector = document.querySelectorAll('.individual');

for (let i = 0; i < selector.length; i++) {

  selector[i].addEventListener('click', function(evt) {

    let list = evt.currentTarget;
    let destiny = 'good-standing-list';

    if (list.parentNode.className === 'good-standing-list') {
      destiny = 'probation-list';
    }

    document.querySelector('ul.' + destiny).appendChild(list);
  });
}


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */
let palete = document.querySelectorAll(".palette span")
    // console.log(fondoTexto);
function changeBackground() {

  let color = this.className
    // console.log(color);
  document.querySelector(".msg").className = "msg "+ color

    }
    for (let i = 0; i < palete.length; i++) {

        let buttonPalete = palete[i]

    buttonPalete.addEventListener('click', changeBackground)
}
