import React, { useContext, useState } from 'react'
import './InputArea.css'
import { TextField, Button } from '@mui/material';
import { ListContext } from '../../../../contexts/ListContext';
const InputArea = () => {
    const {listItems, setListItems, itemCount, setItemCount} = useContext(ListContext)
    const [inputValue, setInputValue] = useState("")

    const onChangeHandler = event => {
        setInputValue(event.target.value);
     };

    function handleClick(){
        if(inputValue.trim() !== ""){
        console.log('Added -->', inputValue);
        setListItems([{ id: itemCount + 1, Title: inputValue.trim(), isCompleted: false}, ...listItems])
        setItemCount(itemCount + 1);
        setInputValue("")
        }
    }
    return (
        <div className='InputArea'>
            <TextField className='InputField' name="Title" onChange={onChangeHandler} value={inputValue} fullWidth size='small' label="" id="inputText" />
            <Button onClick={()=>{handleClick()}} className='Button' size='medium' variant="contained"><span className='PlusIcon'>+</span></Button>
        </div>
    )
}

export default InputArea