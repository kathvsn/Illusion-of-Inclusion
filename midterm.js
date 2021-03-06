var x = document.getElementsByClassName("collapse");

// x.length is num of elements tagged with the class "collapse"
// essentially the num of collapsible btns on a given page
for (var i = 0; i < x.length; i++) {
  // x[i] is the current button being clicked
  // ex: x[0] on the issue page is the first button aka the toxic ingredients button
    x[i].onclick = function(){
      // assigns the element active class
      this.classList.toggle("active");
      // the nextElementSibling is the element following the collapse class
      // the next element is the "content" class which stores the paragraphs + imgs
      this.nextElementSibling.classList.toggle("show");
  }
}

