import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Todo() {
    const bac = useNavigate()
    const back = () => {
        bac(-1)
    }

    const [text, setText] = useState("");
    const handler = (event) => {
        console.log(setText(event.target.value));

    }
    const todo = () => {
        if (text.length < 1) {
            alert("plz write valid");
        }
        else {
            var ul = document.getElementById('ul')
            var li = document.createElement('li');
            var btn = document.createElement('button')
            btn.innerText = "delet";
            li.innerText = text;
            li.appendChild(btn);
            ul.appendChild(li);
            btn.addEventListener('click', function () {
                li.remove();
            })
            setText("");
        }
    }
    return (
        <div className="container ">
            <label className='input'>
            Enter Text here :
            <input type="text" name="name" value={text} onChange={handler} /></label>
            <button className='btn btn-success mx-1 px-4' onClick={todo}>Add</button>
            <ul id='ul'>
            </ul>
            <button className='btn btn-warning mx-1 ' onClick={back}>GO back</button>

        </div>
    )
}
