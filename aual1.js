let currentInput = '';
        let currentOperator = '';
        let lastInput = '';
        let resultValue = 0;
        let result = document.getElementById('result');
      
        function appendToResult(value) {
          currentInput += value;
          result.textContent = currentInput;
        }
      
        function appendOperator(operator) {
          if (currentInput !== '') {
            currentOperator = operator;
            resultValue = parseFloat(currentInput);
            currentInput = '';
          }
        }
      
        function calculate() {
          if (currentInput !== '') {
            let num = parseFloat(currentInput);
            switch (currentOperator) {
              case '+':
                resultValue += num;
                break;
              case '-':
                resultValue -= num;
                break;
              case '*':
                resultValue *= num;
                break;
              case '/':
                resultValue /= num;
                break;
            }
            currentInput = resultValue.toString();
            result.textContent = resultValue;
          }
        }
      
        function clearResult() {
          currentInput = '';
          currentOperator = '';
          lastInput = '';
          resultValue = 0;
          result.textContent = '0';
        }
        document.addEventListener('keydown', function(event) {
          const key = event.key;
        
          switch (key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              appendToResult(key);
              break;
            case '+':
            case '-':
            case '*':
            case '/':
              appendOperator(key);
              break;
            case '=':
            case 'Enter':
              calculate();
              break;
            case 'c':
            case 'C':
              clearResult();
      break;
    case 'Backspace':
      currentInput = currentInput.slice(0, -1); // Remove o último caractere
      result.textContent = currentInput;
      break;
          }
        });
        