import React from 'react';
import HeaderInput from '../header-input/header-input';

const Header = (props) => {
    let amountOfLikes = 0,
    post = "записи";
    props.items.forEach(item => {if(item.like) amountOfLikes += 1;})

    if(props.items.length == 0 || props.items.length > 4) post = "записей";
    if(props.items.length == 1) post = "запись";

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__name">{props.name}</div>
                <div className="header__text">{props.items.length} {post}, из них понравилось {amountOfLikes}</div>
            </div>
            <div className="header__input">
                <HeaderInput/>
            </div>
        </div>
    );
}
 
export default Header;