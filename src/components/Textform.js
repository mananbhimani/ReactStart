import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Todo from './Todo';

export default function Textform(props) {
    const navigation = useNavigate()

    const nav = () => {
        navigation('/Todo');
    }

    const upercase = () => {
        let newtex = text.toUpperCase();
        setText(newtex);
    }
    const rws = () => {
        let tim = text.trim();
        setText(tim);
    }
    const len = () => {
        let lenn = text.length;
        setText(`${text}  length: ${lenn}`);

    }
    const char = () => {
        let char = text;
        let reversedStr = char.split('').reverse().join('');;
        setText(`${text}    Reverse: ${reversedStr}`)
    }
    const handler = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <h3 >{props.heading}</h3>
                <textarea className="form-control mb-3" id="text" value={text} onChange={handler} />
                <button type="button" className='btn btn-success mx-1' onClick={upercase}>Convert to UpperCase</button>
                <button className='btn btn-success mx-2 my-1' onClick={len}>length of Text</button>
                <button className='btn btn-success mx-2 my-1' onClick={rws}>Remove whitespaces</button>
                <button className='btn btn-success mx-2 my-1' onClick={char}>reverse</button>
                <p className='container mx-10 my-3'>character {text.length} word {text.split(" ").length}</p>
                <button className=" btn btn-danger mx-2 my-1" onClick={nav}>GO to todo page</button>
            </div>
        </>
    )
}

