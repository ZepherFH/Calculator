import { useState } from 'react';
import './App.css'
import Button from './components/Button';
const buttonClasses = "btn btn-primary w-75";

function App() {
  const [operator, setOperator] = useState('');
const [number1, setNumber1] = useState('');
const [screen, setScreen] = useState('0');
const [clearScreen, SetClearScreen] = useState (false);

const handleButtonClick = (e)=> {
const {value}= e.target;

if(value === '.'){
 if (screen.includes('.')) return;
}

if(value === 'C'){
  setScreen('0');
  return;
}

//*========*//
if (clearScreen){
  console.log('Cambia screen');
  setScreen(value);
  SetClearScreen(false);
  return;
}

 if (screen === '0' && value !== '.'){
    setScreen(value)
    return;
  }
setScreen(`${screen}${value}`)
}

const handleDelButtonClick = () => {
setScreen(screen.slice(0, -1));
if (screen.length === 1){
  setScreen('0');
  return;
}
  setScreen(screen.slice(0, -1));   
}

const handleOperationButtonClick = (e) =>{
    setOperator(e.target.value);
    setNumber1(screen);
    SetClearScreen(true);
}

const handleEqualButtonClick = () =>{
  const a = +number1;
  const b = +screen;
  switch(operator){
    case '+':
      setScreen((a + b).toString());
      break;

case '-':
      setScreen((a - b).toString());
      break;

case '*':
      setScreen((a * b).toString());
      break;
      
case '/':
      setScreen((a / b).toString());
      break;     

      default:
        break;
  }
}

const buttonsInfo = [
  //*2° FILA*//
  [
    {
      classes: buttonsClass,
      value: 'C',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '/',
      handleClick: handleOperationButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '*',
      handleClick: handleOperationButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '-',
      handleClick: handleOperationButtonClick,
      style: {},
      rows: 1
    }
  ],
  //*3ra FILA*//
  [
    {
      classes: buttonsClass,
      value: '7',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '8',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '9',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '+',
      handleClick: handleOperationButtonClick,
      style: { height: "80px" },
      rows: 2
    }
  ],
  //*4ta FILA*//
  [
    {
      classes: buttonsClass,
      value: '4',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '5',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '6',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    }
  ],
  //*5ta FILA*//
  [
    {
      classes: buttonsClass,
      value: '1',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '2',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '3',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '=',
      handleClick: handleEqualButtonClick,
      style: { height: "80px" },
      rows: 2
    }
  ],
  //*6ta FILA*//
  [
    {
      classes: buttonsClass,
      value: 'DEL',
      handleClick: handleDelButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '0',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClass,
      value: '.',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    }
  ],
]

  return (
    <div className='app'>
         <h1 className='shadow-sm'>
          Calculator
          </h1>
         <table>
          {/*The first row*/}
          <tr>
            <td colSpan={4} style={{
              border: "1px solid black",
              textAlign: "end"
              }}>
              <h2>{screen}</h2>
            </td>
          </tr>
           {/*The second row*/}
           
         </table>
         <Button 
                style ={buttonClasses} 
                handleClick = {handleButtonClick}/>
    </div>
  )}
export default App