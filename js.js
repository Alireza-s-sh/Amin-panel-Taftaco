function date_func()
{
  jalaliDatepicker.startWatch();
}
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("fixed-fare");
  // Get the output text
  var text = document.getElementById("shipping-cost");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
// chnage the color of red button when its hovering
var red_btns = document.getElementsByClassName("red-btn");
for (let index = 0; index < red_btns.length; index++) {
    red_btns[index].addEventListener("mouseover", function () {
      red_btns[index].style.backgroundColor = "white";
      red_btns[index].style.color = "#e32235";
    })
    red_btns[index].addEventListener("mouseout", function () {
      red_btns[index].style.backgroundColor = "#e32235";
      red_btns[index].style.color = "white";
    })
}

// take the sidebar element and its texts
var sidebar = document.getElementsByClassName('sidebar')[0];
var aside_texts = document.getElementsByClassName('aside-text');
// 
function sidebar_func()
{
  if (sidebar.offsetWidth > (screen.width * 0.1))
  {
    sidebar.style.width  = '48px';
    for (let index = 0; index < aside_texts.length; index++) {
      aside_texts[index].style.display = 'none';
    }
  }
  else
  {
    sidebar.style.width  = '234px';
    for (let index = 0; index < aside_texts.length; index++) {
      aside_texts[index].style.display = 'block';
    }
  }
}

