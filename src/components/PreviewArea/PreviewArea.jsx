import React from 'react'
import './PreviewArea.css'
import ToDoList from './ToDoList/ToDoList'
import { useState } from "react";
import { ListContext } from '../../contexts/ListContext';

const todoItems = [
  { id: 1, Title: 'Workout in the gym', isCompleted: true },
  { id: 2, Title: 'Have Dinner', isCompleted: true },
  { id: 3, Title: 'Sleep', isCompleted: true },
  { id: 4, Title: 'Repeat', isCompleted: false },
]

const PreviewArea = () => {
  const [listItems, setListItems] = useState(todoItems)
  const [itemCount, setItemCount] = useState(todoItems.length)
  return (
    <ListContext.Provider value={{listItems, setListItems, itemCount, setItemCount}}>
    <div className='PreviewArea'>
        <ToDoList/>
    </div>
    </ListContext.Provider>
  )
}

export default PreviewArea