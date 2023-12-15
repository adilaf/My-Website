/* The following javascript file contains elements of AI generated code to create 
a fade in effect when scrolling down the webpage. The code has been edited to fit the 
use of the website being made.*/

/* The AI tool used for creating these scripts was Open Ai's  Chat GPT-3 */

/* The following was inspired by multiple sources including W3Schools and ChatGPT */

/* When the page will be loaded the only tab open will be "#recent"
and all other tabs are hidden until a button is clicked revealing the 
new tab---------------------------------------------------------------*/




/* The window.onload function makes 'recent' work appear as a default setting when
users enter or reload the page --------------------------------------------------*/
window.onload = function(){
    document.getElementById("recent").style.display = "flex";
    document.getElementById("studentWork").style.display = "none";
    document.getElementById("filmmaking").style.display = "none";
    document.getElementById("photography").style.display = "none";
    document.getElementById("animation").style.display = "none";
    document.getElementById("design").style.display = "none";
}

/* These functions allow users to click on a button and reveal the 
contents that are assigned to that button

These functions are repeated for each button and each div*/

function showRecent() {
  document.getElementById("recent").style.display = "flex";
  document.getElementById("studentWork").style.display = "none"; /* None is used to hide the other divs */
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showStudentWork() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "flex";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showFilmmaking() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "flex";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showPhotography() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "flex";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showAnimation() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "flex";
  document.getElementById("design").style.display = "none";
}

function showDesign() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "flex";
}


function toggleDropdown(id, iconId) {
  var content = document.getElementById(id);
  var icon = document.getElementById(iconId);

  if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove('active');
  } else {
      content.style.display = "block";
      icon.classList.add('active');
  }
}

