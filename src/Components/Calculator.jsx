import React, { useState, useRef } from 'react'


function Calculator() {

    const [result, setResult] = useState("");
    const submitRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        setResult(result.concat(e.target.name));
        submitRef.current.focus();
    }

    const clear = () => {
        setResult("");
    }

    const slash = () => {
        setResult(result.slice(0, -1));
    }

    const aritmetic = () => {
        let aritmetic = result / result.length;
        setResult(aritmetic)
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("Error")
        }
    }

    const enter = (e) => {
        e.preventDefault();
        calculate();
    }

    const ccc = e => {
       e.preventDefault()
       if (e.key == "Enter") {
        calculate()
       } else if (e.key > -1 || e.key <= 9){
        setResult(result.concat(e.key))
       } else if (e.key === "Backspace") {
        slash()
       } else if (e.key === "Shift") {
        return
       } else {
        setResult(result.concat(e.key))
       }
    }

    return (
        <div className='root'>
        <form onSubmit={enter} onKeyDown={ccc}>
            <div className='calculator-input'>
                <input id='result-input' type='text' value={result ? result : 0} size='30' autoFocus disabled></input><br></br>
            </div>

            <div className='buttons'>
                <div className='buttons-1'>
                    <button type="button" className='btn operations' onClick={clear} id='clear'>Clear</button>
                    <button type="button" className='btn operations' onClick={slash} id='slash'>C</button>
                    <button type="button" className='btn operations' onClick={aritmetic} id='slash'>%</button>
                    <button type="button" className='btn operations' name='/' onClick={handleClick} id=''>&divide;</button>
                </div>

                <div className='buttons-2'>
                    <button type="button" className='btn digits' name='7' onClick={handleClick} id=''>7</button>
                    <button type="button" className='btn digits' name='8' onClick={handleClick}>8</button>
                    <button type="button" className='btn digits' name='9' onClick={handleClick}>9</button>
                    <button type="button" className='btn operations' name='*' onClick={handleClick}>&times;</button>
                </div>

                <div className='buttons-3'>
                    <button type="button" className='btn digits' name='4' onClick={handleClick}>4</button>
                    <button type="button" className='btn digits' name='5' onClick={handleClick}>5</button>
                    <button type="button" className='btn digits' name='6' onClick={handleClick}>6</button>
                    <button type="button" className='btn operations' name='-' onClick={handleClick}>&ndash;</button>
                </div>

                <div className='buttons-4'>
                    <button type="button" id='btn' className='btn digits' name='1' onClick={handleClick}>1</button>
                    <button type="button" className='btn digits' name='2' onClick={handleClick}>2</button>
                    <button type="button" className='btn digits' name='3' onClick={handleClick}>3</button>
                    <button type="button" className='btn operations' name='+' onClick={handleClick}>+</button>
                </div>

                <div className='buttons-5'>
                    <button type="button" className='btn digits' name='AC' onClick={slash} >AC</button>
                    <button type="button" className='btn digits' name='0' onClick={handleClick}>0</button>
                    <button type="button" className='btn digits' name='.' onClick={handleClick}>.</button>
                    <button type="submit" className='btn operations' name='=' onClick={calculate} ref={submitRef}>=</button>
                </div>
            </div>
        </form>        
    </div>

    )
}

export default Calculator;