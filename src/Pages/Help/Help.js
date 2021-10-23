import classes from "./Help.module.css";
import HelpMenu from "./HelpMenu";
import HelpQuestion from "./HelpQuestions";
const Help = () => {
  return (
    <section>
      <div className={classes['help__title-frame']}>
        <span className={classes.help__title}>Helpdesk</span>
      </div>
      <div className={classes.help}> 
        <HelpMenu />
        <HelpQuestion />
      </div>
    </section>
  );
};

export default Help;
