function convert() {
    // Get the input value and the chosen conversion type
    var input = document.getElementById("input").value;
    var choice = document.querySelector('input[name="choice"]:checked').value;
    var result = "";
    
    // Check if the input is valid
    if (choice === "code") {
      if (/^\d+$/.test(input) === false || input < 0 || input > 127) {
        document.getElementById("error").innerHTML = "Please enter a valid ASCII code (0-127).";
        return;
      }
    }
    else {
      if (input.length !== 1) {
        document.getElementById("error").innerHTML = "Please enter a single character.";
        return;
      }
    }
    
    // Convert the input and display the result
    if (choice === "code") {
      result = String.fromCharCode(input);
      document.getElementById("result").innerHTML = "The character for ASCII code " + input + " is " + result + ".";
    }
    else {
      result = input.charCodeAt(0);
      document.getElementById("result").innerHTML = "The ASCII code for character " + input + " is " + result + ".";
    }
    
    // Clear any previous error messages
    document.getElementById("error").innerHTML = "";
  }
  function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById("mode-switch");
    
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      modeSwitch.innerText = "Switch to Dark Mode";
    } else {
      body.classList.add("dark-mode");
      modeSwitch.innerText = "Switch to Light Mode";
    }
  }



  

