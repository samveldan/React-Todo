import React from 'react';

const Item = (props) => {
    function changeData(index, target, property) {
        props.setItems(items => {
            let newArray = items.map(item => {
                if(item.id == index && target.classList.contains("active")) {
                    item[property] = true;
                }
                else if(item.id == index && !target.classList.contains("active")) {
                    item[property] = false;
                }
                return item;
            })
            return newArray;
        })
    }

    const paintStar = e => {
        e.target.classList.toggle("active");
        const index = props.info.id;

        changeData(index, e.target, "important");

        e.stopPropagation();
    };

    const deleteItem = e => {
        props.setItems((oldArray) => {
            let newArray = oldArray.filter(({id}) => {
                return props.info.id != id;
            });

            return newArray;
        })
    };

    const likeItem = e => {
        let parent = e.target.closest(".todo__item");
        const likeBtn = parent.querySelector(".like");
        const index = props.info.id;

        likeBtn.classList.toggle("active");

        changeData(index, likeBtn, "like");
    };

    let likeClass = "fa-solid fa-heart like";
    let starClass = "fa-solid fa-star star";
    if(props.info.like) likeClass += " active";
    if(props.info.important) starClass += " active";

    return (
        <div onClick={likeItem} className="todo__item">
            <div className="todo__item-text">{props.info.text}</div>
            <div className="todo__item-btns">
                <i onClick={paintStar} className={starClass}></i>
                <i onClick={deleteItem} className="fa-solid fa-trash trash"></i>
                <i className={likeClass}></i>
            </div>
        </div>
    );
}
 
export default Item;