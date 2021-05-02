class main{
    constructor(previous, current){
        this.previous_data = previous;
        this.current_data = current;
        this.clear()
    }

    clear(){
        this.previous = '';
        this.current = '';
        this.operation = undefined;
    }

    delete(){
        this.current = this.current.toString().slice(0, -1)
    }

    appendnumber(number){

        if (number === '.' && this.current.includes('.')) return;
        this.current = this.current.toString() + number.toString();
    }

    chooseoperation(operation){
        if(this.current === '') return;
        /* calling main method if operation is present */
        if(this.operation !== ''){

            this.main_do();
        }
        /*   Previous text becomes current text and current text becomes empty str   */
        this.operation = operation;
        this.previous = this.current;
        this.current = ''
    }
        
    main_do() {
        let computation
        const prev = parseFloat(this.previous)
        const current = parseFloat(this.current)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case '*':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ''
      }
    updatedisplay(){
        /* Updating the Current text */
        this.current_data.innerText = this.current;

        if (this.operation != null){
            this.previous_data.innerText = `${this.previous} ${this.operation}`
        }
        /* Updating the Previous text */
        

    }
}


const data_btn = document.querySelectorAll('[num1]');
const operation_btn = document.querySelectorAll('[opr]');
const equal_btn = document.querySelector('[eql]');
const delete_btn = document.querySelector('[delete]');
const ac_btn = document.querySelector('[all-clear]');

const prev_data = document.querySelector('[perv_data]');
const current_data = document.querySelector('[cur_data]');




/*  Initializing a object of the class (python term don't know about js) */
const calculator = new main(prev_data, current_data);


/*  EVENT LISTENER SECTION */

data_btn.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendnumber(button.innerText)
      calculator.updatedisplay()
    })
  })

operation_btn.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseoperation(button.innerText)
      calculator.updatedisplay()
    })
  })


  equal_btn.addEventListener('click', button => {
    calculator.main_do()
    calculator.updatedisplay()
  })
  
  ac_btn.addEventListener('click', button => {
    calculator.clear()
    calculator.updatedisplay()
  })
  
  delete_btn.addEventListener('click', button => {
    calculator.delete()
    calculator.updatedisplay()
  })
