import classes from './Chevron.module.css';
const Chevron = (props) => {
  return (
    <svg
    className={classes.chevron}
    style={props.style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 28 28"
    >
      <title>chevron-down</title>
      <path d="M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z"></path>
    </svg>
  );
};
export default Chevron;