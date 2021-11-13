import React from 'react'
import './sidebar.css'

function Sidebar({ data, questionNum }) {
    return (
        <div className='sidebar'>
            <ul className='list-items'>
                {
                    data.map((item, idx) => (
                        <li className={item.id===questionNum ? 'list-item level' : 'list-item'} key={item.id}>
                            <span className='list-item-number'>{item.id}</span>
                            <span className='list-item-amount'>${item.price}</span>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Sidebar
