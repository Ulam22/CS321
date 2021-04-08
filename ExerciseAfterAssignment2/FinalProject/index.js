//SwapDisplay UI Button originating from Prof Menzin's site
function swapDisplay(someElement) {
  my_ul = document.getElementById(someElement);
  if (my_ul.style.display == "block") {
    my_ul.style.display = "none";
  } else {
    my_ul.style.display = "block";
  }
};

/*
** prevent default in children ul elements** */

 $('li').children('ul').click( (e) => {
    e.preventDefault(); 
  });

// Confirm page src changes -- checkFirst class -- 
function checkFirst () {
  var confirmation = confirm("Are you sure you'd like to leave this page?");
  if (confirmation == true) {
    $('li').children('ul').children('li').click( (e) => {
      e.stopPropagation(); 
      location = e.target.getAttribute('a');  });
    return true;
  }
  else {
  
    return false;
  }
};

// Collapse all and Display all but in one toggle button
$('#displayToggle').delegate(".unit", "click", () => {
  $('li').children('ul').toggle( display );
})