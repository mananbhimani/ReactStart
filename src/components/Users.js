import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const arr = [{ id: 1, name: 'manan', age: '22', role: 'frontend' },
{ id: 4, name: 'preet', age: '22', role: 'python' },
{ id: 5, name: 'dhyey', age: '22', role: 'AI' },
{ id: 6, name: 'dharsh', age: '22', role: 'python' },
{ id: 7, name: 'yash', age: '22', role: 'AI' },
{ id: 8, name: 'vasu', age: '22', role: 'python' },
{ id: 9, name: 'meet', age: '22', role: 'AI' },
{ id: 10, name: 'rushi', age: '22', role: 'python' },
{ id: 3, name: 'param', age: '22', role: 'c++' },
{ id: 2, name: 'ayush', age: '23', role: 'managaer' }];

export default function Users() {
    // const [selectedID , setSelectedId] = useState("")
    // const history = useLocation();



    return (
        <div className='container' >

            <div>Name:</div>
            {
                arr.map(user =>
                    <Link to={`/user/${user.id}`}>
                        <div>
                            {user.name}
                        </div>
                    </Link>
                )
            }
        </div>
    )
}
