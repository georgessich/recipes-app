import Calendar from "react-calendar";
import "./Calendar.css";
import classes from "./BlogNavigation.module.css";
const BlogNavigation = (props) => {
  return (
    <div className={classes.blog_navigation}>
      <span className={classes["blog_navigation-title"]}>Navigation</span>
      <Calendar locale="en" />
      <div className={classes['blog_navigation-filters']}>
        <span className={classes["blog_navigation-tagtitle"]}>Author</span>
        <div className={classes['blog_navigation-tags']}>
          {props.authors.map((author) => (
            <div className={classes['blog_navigation-tag']}>{author.author}</div>
          ))}
        </div>
      </div>
      <div className={classes['blog_navigation-filters']}>
        <span className={classes["blog_navigation-tagtitle"]}>Tag</span>
        <div className={classes['blog_navigation-tags']}>
          {props.tags.map((tag) => (
            <div className={classes['blog_navigation-tag']}>{tag.tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
