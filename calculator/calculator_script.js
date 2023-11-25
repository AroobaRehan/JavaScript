document.addEventListener('DOMContentLoaded', function () {
  let displayValue = '';
  const display = document.getElementById('display');

  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function () {
      displayValue += this.textContent;
      display.value = displayValue;
    });
  });

  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function () {
      if (this.textContent === 'C') {
        displayValue = '';
        display.value = displayValue;
      } else if (this.textContent === '=') {
        try {
          displayValue = eval(displayValue);
          display.value = displayValue;
        } catch (error) {
          displayValue = '';
          display.value = 'Error';
        }
      } else {
        displayValue += ` ${this.textContent} `;
        display.value = displayValue;
      }
    });
  });
});