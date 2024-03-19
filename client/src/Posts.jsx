import React from 'react'


import propTypes from 'prop-types';

function Posts(props){

    const itemList = props.items;

//    itemList.sort((a, b) => a.id - b.id);
//    posts.sort((a, b) => b.id - a.id); revserse order

    const listItems = itemList.map(item => <li key={item.id}>
                                            <b>{item.title}</b><br />
                                            {item.content}
                                            </li>)

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

Posts.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number,
                                            title: propTypes.string,
                                            content: propTypes.string})
)}

Posts.defaultProps = {
    items: [{id:0, title:"Default Title", content:"Default Content"}]
}

export default Posts;