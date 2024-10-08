// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const textParagraph = document.getElementById("text");
    textParagraph.textContent = "This is really cool!";
  });
  
  // This line will run before the DOMContentLoaded event is fired
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  