import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom';

export default function Hoockstate() {
    let [con, setcon] = useState(0);
    // const[text,setText] = useState("");
    const btn = () => {
        setcon(con + 1)
    };
    const btn1 = () => {
        setcon(con - 1)
    };
    const btn2 = () => {
        var val = con;
        setcon(con = con - val);
    };
    return (
        <>
            <div className='container'>
                <button className='btn btn-warning mx-1' onClick={btn} >Increment</button>
                <button className='btn btn-warning mx-1' onClick={btn1} >Decrement</button>
                <button className='btn btn-warning mx-1' onClick={btn2} >Reset</button>
                <p className='btn btn-info mx-1 my-2'> counter = {con}</p>
            </div>
            <div className='container'>
                <Link className='btn btn-dark mx-1' to="Fetures">Fetures </Link> 
                <Link className='btn btn-dark mx-1' to="New">New</Link>
            </div>
            <Outlet/>
        </>
    )
}
