let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let ans = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        ans = eval(ans);
        input.value = ans;
      } catch {
        input.value = "Invalid Expression";
        ans = "";
      }
    } 
    
    else if (e.target.innerHTML == "AC") {
      ans = "";
      input.value = ans;
    } 
    
    else if (e.target.innerHTML == "DEL") {
      ans = ans.substring(0, ans.length - 1);
      input.value = ans;
    } 
    
    else {
      ans += e.target.innerHTML;
      input.value = ans;
    }

  });

});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Numbers and operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        ans += key;
        input.value = ans;
    }

    // Enter key
    else if (key === "Enter") {
        try {
            ans = eval(ans);
            input.value = ans;
        } catch {
            input.value = "Error";
            ans = "";
        }
    }

    // Backspace key
    else if (key === "Backspace") {
        ans = ans.substring(0, ans.length - 1);
        input.value = ans;
    }

    // Escape key
    else if (key === "Escape") {
        ans = "";
        input.value = "";
    }
});