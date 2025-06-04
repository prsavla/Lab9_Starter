
errorBtns[0].addEventListener('click', () => {
    console.log("Console logging example")
    
});

errorBtns[1].addEventListener('click', () => {
    console.error("Console error example")
});

errorBtns[2].addEventListener('click', () => {
    console.count("Console Count");
});

errorBtns[3].addEventListener('click', () => {
    console.warn("Console.warn message");
});

errorBtns[4].addEventListener('click', () => {
    let x = false;
    console.assert(x, "Assertion failed: x is false!");
});

errorBtns[5].addEventListener('click', () => {
    console.clear();
});

errorBtns[6].addEventListener('click', () => {
    const obj = { name: "Pratham", age: 20, details: { major: "CS", year: "2nd year?" } };
    console.dir(obj);
});

errorBtns[7].addEventListener('click', () => {
    console.dirxml(document.body);
 });

 errorBtns[8].addEventListener('click', () => {
    console.group("Grouped Messages");
    console.log("Inside group log");
    console.error("Inside group error");
  });

  errorBtns[9].addEventListener('click', () => {
    console.groupEnd();
  });

  errorBtns[10].addEventListener('click', () => {
    const people = [
      { name: "Alice", age: 22 },
      { name: "Bob", age: 25 }
    ];
    console.table(people);
  });
  
  errorBtns[11].addEventListener('click', () => {
    console.time("Timer");
  });
  
  errorBtns[12].addEventListener('click', () => {
    console.timeEnd("Timer");
  });
  
  errorBtns[13].addEventListener('click', () => {
    function funcA() {
      funcB();
    }
    function funcB() {
      console.trace("random function trace");
    }
    funcA();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
  
    try {
      if (secondNum === "0" && operator === "/") {
        throw new DivideByZeroError("Cannot divide by zero!");
      }
  
      let result = eval(`${firstNum} ${operator} ${secondNum}`);
      if (isNaN(result)) throw new Error("Calculation returned NaN");
      output.innerHTML = result;
  
    } catch (err) {
      console.error("Caught Error: ", err.message);
      output.innerHTML = "Error: " + err.message;
    } finally {
      console.log("Calculation attempted");
    }
  });
  
  // ===== Custom Error =====
  class DivideByZeroError extends Error {
    constructor(message) {
      super(message);
      this.name = "DivideByZeroError";
    }
  }
  
  // ===== Global Error Catching =====
  window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global Error Caught:", message);
    return true; // prevents the default browser error message
  };
  
  errorBtns[14].addEventListener('click', () => {
    nonExistentFunction(); // This will trigger a global error
  });
  
