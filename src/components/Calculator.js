import React, { useState } from 'react';
import {BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './Calculator.css';
import '../index.css';

function Calculator() {
    const [calculation, setCalculation]=useState('')
    const [output, setOutput]=useState('');
    const actions = ['/', '*', '+', '-', '.'];

    const updateCalculation = (value) => {
   
        if(
          
            actions.includes(value) & calculation === '' ||
            actions.includes(value) & actions.includes(calculation.slice(-1))
        ){
            return
        }
        setCalculation(calculation+value)

            if (!actions.includes(value)){
                setOutput(eval(calculation+value).toString())
            }

    }
   const createDigits =()=>{
       const digits=[]

       for (let i=1;i<10; i++){
           digits.push(
               <button className="dig_button" onClick={()=>updateCalculation(i.toString())} key={i}>{i}</button>
           )
       }
       return digits
   }
const calculate=()=>{
    setCalculation(eval(calculation).toString())
}
    const clear=()=>{
        if(calculation === ''){
            return
        }
        const value=calculation.slice(0,-1)
        setCalculation(value)
    }


    return (
        

    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap">
                                <h2>Blog Area</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link exact to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><a href="#">Blog</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog_area section-padding">
            <div className="container">
                <div className="row">





                <div>
                    <center> <h1> React Calculator With React Hooks</h1></center>

          <div className="calc-grid">
            <div className='output'>
                {calculation||'0'}
                {output ? <span className="preRes">{output}</span>:''}


            </div>

        <div>
            <div className='ops'>

            <button className="button_calc" key="/" onClick={()=>{updateCalculation('/')}} >/</button>
            <button className="button_calc" key="*" onClick={()=>{updateCalculation('*')}}>*</button>
            <button className="button_calc" key="+" onClick={()=>{updateCalculation('+')}}>+</button>
            <button className="button_calc" key="-" onClick={()=>{updateCalculation('-')}}>-</button>
            <button className="button_calc" key="c" onClick={clear}> <img  width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
            </div>
            <div className='dig'>

                {createDigits()}

            <button className="dig_button" onClick={()=>{updateCalculation('.')}}>.</button>
            <button className="dig_button" onClick={()=>{updateCalculation('0')}}>0</button>
            <button className="dig_button" onClick={calculate}>=</button>
        </div>
    </div>


    </div>
      </div>
        










                   
                </div>
            </div>
        </section>
    </motion.main>   
);
}

export default Calculator;




























