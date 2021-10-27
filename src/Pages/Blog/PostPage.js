import classes from './PostPage.module.css';

import {useContext} from 'react';
import BlogContext from './BlogContext/blog-context';
const PostPage = () => {
    const {blogPage} = useContext(BlogContext);
    return (
    <div  className={classes['postPage']}>
        <span className={classes['postPage-title']}>{blogPage.title}</span>
        <div className={classes['postPage-info']}>
            <span className={classes['postPage-author']}>{blogPage.author}</span>
            <span className={classes['postPage-date']}>{blogPage.date.toDateString()}</span>
            <span className={classes['postPage-tag']}>{blogPage.tag}</span>
        
        </div>
        <div className={classes['postPage-post']}>
            <img src={blogPage.img} className={classes['postPage-img']}/>
    <p className={classes['postPage-text']}>{blogPage.postPreview}</p>
        </div>
    </div>
    )
}

export default PostPage;