import React from 'react'
import './ToDoList.css'
import InputArea from './InputArea/InputArea'
import ItemList from './ItemList/ItemList'

const ToDoList = () => {
    return (
        <div className='MainContainer'>
            <div className='TopSection'>
                <div className='Heading'>Todo</div>
            </div>
            <InputArea/>
            <ItemList/>
        </div>
    )
}

export default ToDoList