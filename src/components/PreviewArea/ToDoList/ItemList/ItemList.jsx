import React, { useContext, useState } from 'react'
import './ItemList.css'
import Item from './Item'
import { ListContext } from '../../../../contexts/ListContext'



const ItemList = () => {
    const { listItems, setListItems, itemCount, setItemCount } = useContext(ListContext)
    const [selectedItem, setSelectedItem] = useState()
    var destination = 0;
    const handleDelete = (id) => {
        setListItems(l => l.filter(item => item.id !== id))
        setItemCount(itemCount - 1)
    }
    const handleCheck = (id) => {
        console.log(listItems);
        console.log('pressed id', id);
        const updatedArray = listItems.filter((item) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted
            }
            return item
        })
        setListItems([...updatedArray])
        // const completedItem = updatedArray.filter(item => item.isCompleted)
        // const notCompletedItem = updatedArray.filter(item => item.isCompleted === false)
        // setListItems([...notCompletedItem, ...completedItem])
    }
    const handleDragStart = (e, id) => {
        console.log('Dragging -->', id, e);
        const index = listItems.map(e => e.id).indexOf(id);
        // console.log('The correct index --->', index);        
        setSelectedItem(listItems[index]);
        console.log('Selected Item --->', listItems[index]);
    }
    const handleDragEnd = (e, id) => {
        console.log('Placed Item ', selectedItem, ' at ', destination +1);
        console.log(e);
        let temp = [...listItems]
        temp = temp.filter(item => item.id !== id)
        temp.splice(destination, 0, selectedItem)
        console.log(temp);
        setListItems(temp);
    }
    const handleDragEnter = (e, id) => {
        console.log('Placing Dragged Item in -->', id);
        destination = listItems.map(e => e.id).indexOf(id);;
    }

    return (
        <div className='ListArea'>

            {listItems.map((val, index) => {
                return (
                    <Item key={index} id={val.id} Title={val.Title} isCompleted={val.isCompleted} handleDelete={handleDelete} handleCheck={handleCheck} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>
                )
            }
            )}

        </div>
    )
}

export default ItemList