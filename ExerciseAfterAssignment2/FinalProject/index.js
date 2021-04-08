function swapDisplay(someElement) {
  my_ul = document.getElementById(someElement);
  if (my_ul.style.display == "block") {
    my_ul.style.display = "none";
  } else {
    my_ul.style.display = "block";
  }
}
