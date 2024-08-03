import React from 'react'
import './Item.css'
import Checkbox from '@mui/material/Checkbox';
import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Item = ({ id = 1, Title = "", isCompleted = false, handleDelete = () => { }, handleCheck = () => { }, handleDragStart = () => { }, handleDragEnd = () => { }, handleDragEnter = () => { }  }) => {


    return (
        <div className='ItemContainer' draggable='true' onDragStart={(event)=>handleDragStart(event, id)} onDragEnd={(event)=>handleDragEnd(event, id)} onDragEnter={(event)=>handleDragEnter(event, id)}>
            <div className='Item' onClick={() => handleCheck(id)}>
            {isCompleted ?
                <Checkbox className='CheckboxCompleted' checked={isCompleted}/>
                : <Checkbox className='Checkbox' checked={isCompleted} />
            }
                <div className='Title'>{isCompleted ? <span className='Completed'><s>{Title}</s></span> : Title}</div>
            </div>
            <IconButton onClick={() => handleDelete(id)}>
                <DeleteOutline className='DeleteIcon'/>
            </IconButton>

        </div>
    )
}

export default Item