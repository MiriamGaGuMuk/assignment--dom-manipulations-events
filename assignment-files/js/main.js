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

document.querySelectorAll(".option").forEach(function (div) {
    
    div.addEventListener('click', function (e) {
        
        if (e.currentTarget.className === "option") {
            e.currentTarget.classList.add('selected')
            
        } else {
            e.currentTarget.classList.remove('selected')
        }

    })
})

/* TASK 3 -- Increase total number*/
document.querySelectorAll('.point').forEach( btn => {
    
  let total = document.querySelector('.total-points');
  btn.addEventListener('click', ()=> total.textContent = parseInt(total.textContent) + parseInt(btn.textContent));
})

/* TASK 4 (Adventure Mode)-- Move Item List to List */
    let standing = document.querySelector('.good-standing-list');
    let probation = document.querySelector('.probation-list');

document.querySelectorAll('.individual').forEach(function (list) {
    list.addEventListener('click', function () {

        if (list.parentNode.className === "good-standing-list") {
            probation.appendChild(list);
            standing.removeChild(list);
        }

        if (list.parentNode.className === "probation-list") {
            standing.appendChild(list);
            probation.removeChild(list);
        }

    })
})

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
