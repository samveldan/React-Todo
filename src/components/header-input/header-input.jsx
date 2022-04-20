import React from 'react';

const HeaderInput = (props) => {
    function hideSomePosts(items, value, liked = "undefined") {
        items.forEach(item => {
            item.classList.add("hide");

            if(liked == "liked") {
                let hasLike = item.querySelector(".like.active");

                if(hasLike && (item.innerText).toLowerCase().indexOf(value.toLowerCase()) != -1) {
                    item.classList.remove("hide");
                }
            }
            else {
                if((item.innerText).toLowerCase().indexOf(value.toLowerCase()) != -1) {
                    item.classList.remove("hide");
                }
            }
        })
    }

    const showItems = e => {
        const todo = e.target.closest(".todo");
        let items = todo.querySelectorAll(".todo__item");
        let btns = e.target.closest(".header__btns").querySelectorAll("button");
        let value = todo.querySelector(".header__input input").value;

        btns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        if(e.target.classList.contains("all")) {
            hideSomePosts(items, value);
        }
        else if(e.target.classList.contains("liked")) {
            hideSomePosts(items, value, "liked");
        }
    };

    const searchItems = e => {
        const todo = e.target.closest(".todo");
        let items = Array.from(todo.querySelectorAll(".todo__item"));
        let value = e.target.value;
        let activeBtn = todo.querySelector(".header__btns button.active");

        if(activeBtn.classList.contains("liked")) {
            items = Array.from(items).filter(item => {
                if(item.querySelector(".like.active")) return item;
            });
        }
        
        items.forEach(item => {
            item.classList.remove("hide");
            if((item.innerText).toLowerCase().indexOf(value.toLowerCase()) == -1) {
                item.classList.add("hide");
            }
        });
    };

    return (
        <div className="header__input">
            <input type="text" placeholder='Поиск по записям' onChange={searchItems}/>
            <div className="header__btns" onClick={showItems}>
                <button data-btn="all" className='all active'>Все</button>
                <button data-btn="liked" className='liked'>Понравилось</button>
            </div>
        </div>
    );
}
 
export default HeaderInput;