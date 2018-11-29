// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

document.querySelector('#hide-nav button').addEventListener('click', function() {
    document.querySelector('#hide-nav .nav-menu').classList.toggle('nav-menu-hidden');


/* TASK 2 -- Select/Deslect an Icon */
let selector = document.querySelectorAll('#select-items .wish-list .option');
for (let i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(evt) {
    evt.currentTarget.classList.toggle('selected');
  })
}

/* TASK 3 -- Increase total number*/


/* TASK 4 (Adventure Mode)-- Move Item List to List */


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */
