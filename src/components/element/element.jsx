import React from 'react';
import Item from '../item/item';

const Element = ({data, setItems, items}) => {
    return (
    <>
        {data.map(item => {
            return <Item key={item.id} info={item} setItems={setItems} items={items}/>
        })}
    </>
    )
}
 
export default Element;