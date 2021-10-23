import classes from "./HelpQuestions.module.css";

const HelpQuestions = () => {
  return (
    <div className={classes.help__question}>
      <span className={classes['help__question-title']}>General Questions</span>
      <div className={classes['help__question-block']}>
        <span className={classes['help__question-quest']}>How do I share feedback?</span>
        <p className={classes['help__question-answer']}>
          We'd love to hear from you: Fill out our feedback form or email us at
          info@overs.com
        </p>
        <span className={classes['help__question-quest']}>How do I save a recipe I find on Overs?</span>
        <p className={classes['help__question-answer']}>Click the heart icon on the recipe card or recipe headline bar.</p>
        <span className={classes['help__question-quest']}>How do I upload a recipe of my own?</span>
        <p className={classes['help__question-answer']}>
          Visit our Member Recipe Upload page to upload a recipe of your own.
        </p>
        <span className={classes['help__question-quest']}>
          Is it okay to add a recipe from a cookbook to the Member Recipe
          Database?
        </span>
        <p className={classes['help__question-answer']}>
          Our User Agreement states that our users may not "post, upload,
          transmit, send or otherwise make available on or through the Service
          any Content that infringes, violates, or breaches the copyright,
          trademark, trade secret or any other personal or proprietary right of
          us, our licensors, vendors, service providers, other users, and/or any
          third party." Translated from legalese, that means, "Sorry, but we
          reeeeeeeeeealllllllly wish you wouldn't."
        </p>
      </div>
    </div>
  );
};

export default HelpQuestions;
