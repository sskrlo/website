document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
        alert("This function has been disabled!");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("This function has been disabled!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        alert("This function has been disabled!");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("This function has been disabled!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("This function has been disabled!");
      window.event.returnValue = false;
    });
  }
  document.addEventListener('click', function(event) {
    // Check if the click is anywhere on the document
    var textElement = document.getElementById('text-to-hide');
    if (textElement) {
        textElement.style.display = 'none'; // Hide the text
    }
});