import { useState } from 'react';
import './App.css'

const buttonsClasses = 'btn btn-primary w-75';

function App() {
  const [number1, setNumber1] = useState('');
  const [operator, setOperator] = useState('');
  const [clearScreen, SetClearScreen] = useState(false);
  const [screen, setScreen] = useState('0');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    if (value === '.'){
    if (screen.includes('.')) return;
    }
  if (value === 'C') {
    setScreen('0');
    return;
  }
  /// 
  console.log({number1});
  if (clearScreen) {
    console.log('Cambia screen');
    setScreen(value);
    SetClearScreen(false);
    return;
  }
   if (screen === '0' && value !== '.') {
    setScreen(value)
   } else {
    setScreen (`${screen}${value}`)
    }  
  }

  const handleDelButtonClick = () => {
    if (screen.length === 1){
      setScreen('0')
      return;
    } 
  setScreen(screen.slice(0, -1));
    
  }

  const handleOperationButtonClick = (e) => {
 setOperator(e.target.value);
 setNumber1(screen);
 SetClearScreen(true);
    }
    
  
  const handleEqualButtonClick = () => {
    const a = +number1;
    const b = +screen;
    switch (operator) {
      case '+':
setScreen((a + b).toString());        
        break;
    
      default:
        break;
    }
  }

  return (
    <div className='app'>
    <h1>Calculator</h1>
    <table>
      {/*First row */}
      <tr>
        <td colSpan={4} 
        style={{border:"1px solid black",
        textAlign: "end"
        }}>
          <h2>{screen}</h2></td>

      </tr>
      {/*Second row */}
      <tr>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="C"
         onClick={(e) => handleButtonClick(e)}> C </button> 
        </td>
        <td>
        <button
        type= "button" 
        className={buttonsClasses}> / </button> 
        </td>
        <td> 
        <button
        type= "button" 
        className={buttonsClasses}> * </button> 
        </td>
        <td> 
        <button
        type= "button" 
        className={buttonsClasses}> - </button> 
        </td>
      </tr>
      {/*Third row */}
      <tr>
      <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="7"
         onClick={(e) => handleButtonClick(e)}> 7 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="8"
         onClick={(e) => handleButtonClick(e)}> 8 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="9"
         onClick={(e) => handleButtonClick(e)}> 9 </button> 
        </td>
        <td rowSpan={2}><button
        type= "button"
         className={buttonsClasses}
         style={{height: "80px"}}
         value='+'
         onClick= {(e) => handleOperationButtonClick(e)}
         > + </button>
          </td>
      </tr>
     {/*Fourth row */}
      <tr>
      <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="4"
         onClick={(e) => handleButtonClick(e)}> 4 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="5"
         onClick={(e) => handleButtonClick(e)}> 5 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="6"
         onClick={(e) => handleButtonClick(e)}> 6 </button> 
        </td>
      </tr>
       {/*Fifth row */}
      <tr>
      <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="1"
         onClick={(e) => handleButtonClick(e)}> 1 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="2"
         onClick={(e) => handleButtonClick(e)}> 2 </button> 
        </td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="3"
         onClick={(e) => handleButtonClick(e)}> 3 </button> 
        </td>
        <td rowSpan={2}><button
        type= "button"
         className={buttonsClasses}
         style={{height: "80px"}}
         onClick={handleEqualButtonClick}
         > = </button></td>
      </tr>
       {/*Sixth row */}
      <tr>
      <td>
        <button type= "button"
         className={buttonsClasses}
         onClick={handleDelButtonClick} > DEL </button>
         </td>
        <td>
        <button type= "button"
         className={buttonsClasses}
         value="0"
         onClick={(e) => handleButtonClick(e)}> 0 </button></td>
        <td> 
        <button
        type= "button"
         className={buttonsClasses}
         value="."
         onClick={(e) => handleButtonClick(e)}> . </button> 
        </td>
      </tr>
    </table>
    </div>
 
  )
}

export default App