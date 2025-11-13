const grab = id => document.getElementById(id);

const display = grab("calc-display");
const buttons = document.querySelectorAll("#calc-buttons button");
const themeSwitch = grab("theme-switch");

// ============
// ============ DARK MODE 
// ============
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

// ============
// ============ INPUT 
// ============ 

function workTheStuff(value) {
  
  if (value === "=") {
    try {
      display.value = Number(eval(display.value).toFixed(2));
    } catch {
      console.error("error");
      display.value = "Error";
    }
    
    
  } else if (value === "C") {
    display.value = "";
  } else if (value === "⌫") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += value;
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    workTheStuff(btn.textContent.trim());
  });
});