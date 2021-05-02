
class main{
    constructor(previous, current){
        this.previous = previous;
        this.current = current;
        this.clear();
    }

    clear(){
        this.previous = "";
        this.curent = "";
        this.operation = undefined;
    }

    delete(){}

    appendnumber(number){
        if (number === '.' && this.current.includes('.')) return;
        this.currentOperand = this.current.toString() + number.toString();
    }

    chooseoperation(operation){


    }

    main_do(){}

    updatedisplay(){
        this.current.innerText = this.current;
    }
}


const data_btn = document.querySelectorAll('[num1]');
const operation_btn = document.querySelectorAll('[opr]');
const equal_btn = document.querySelector('[eql]');
const delete_btn = document.querySelector('[delete]');
const ac_btn = document.querySelector('[all-clear]');

const prev_data = document.querySelector('[perv_data]');
const current_data = document.querySelector('[cur_data]');

console.log(prev_data.innerText);
console.log(current_data.innerText);


const calculator = new main(prev_data, current_data);

data_btn.forEach(button =>{
    button.addEventListener("click", ()=> {
        calculator.appendnumber(button.innerText)
        calculator.updatedisplay()
    })

})
