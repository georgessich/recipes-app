import Calendar from "react-calendar";
import "./Calendar.css";
import classes from "./BlogNavigation.module.css";
const BlogNavigation = (props) => {
  return (
    <div className={classes.blog_navigation}>
      <span className={classes["blog_navigation-title"]}>Navigation</span>
      <Calendar locale="en" allowPartialRange={true} selectRange={true} returnValue="range" onChange={(value, event) => props.setDate(value)
}/>
      <div className={classes['blog_navigation-filters']}>
        <span className={classes["blog_navigation-tagtitle"]}>Author</span>
        <div className={classes['blog_navigation-tags']}>
          {props.authors.map((author, i) => (
            <div className={classes['blog_navigation-tag']}>
            <input type="radio" onChange={(e) => props.setAuthorsChoice(e.target.value)} value={author.author} name="author" id={`author-${i}`}/>
            <label htmlFor={`author-${i}`}>{author.author}</label>
            </div>
            
          ))}
        </div>
      </div>
      <div className={classes['blog_navigation-filters']}>
        <span className={classes["blog_navigation-tagtitle"]}>Tag</span>
        <div className={classes['blog_navigation-tags']}>
        {props.tags.map((tag, i) => (
            <div className={classes['blog_navigation-tag']}>
            <input type="radio" onChange={(e) => props.setTagsChoice(e.target.value)} value={tag.tag} name="tag" id={`tag-${i}`}/>
            <label htmlFor={`tag-${i}`}>{tag.tag}</label>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
