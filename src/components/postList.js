import React from 'react';
import PostListItem from "./postListItem";
import '../css/post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onImpo={() => onToggleImportant(id)}
                    onLiked={() => onToggleLike(id)}
                />
            </li>
        )
    })
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )

}
export default PostList