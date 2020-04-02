import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import copy from 'copy-to-clipboard';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    background: palette.grey[100],
    padding: spacing(2),
    position: 'relative',
    marginTop: spacing(2),
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

Code.propTypes = {
  children: PropTypes.node,
};

function Code({ children }) {
  const classes = useStyles();
  const [feedback, setFeedback] = React.useState(null);
  const codeRef = createRef();

  function copyHandler() {
    const text = codeRef.current.textContent;
    const result = copy(text);
    if (result) {
      setFeedback({
        text: 'COPIED',
        error: false,
      });
    } else {
      setFeedback({
        text: 'ERROR',
        error: true,
      });
    }
  }

  function hideFeedback() {
    setFeedback(null);
  }

  return (
    <div className={classes.root} >
      <pre ref={codeRef}>{children}</pre>

      <Button
        onClick={copyHandler}
        className={classes.button}
        color='primary'
        size='small'
      >
        Copy
      </Button>

      {feedback ? (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open
          onClose={hideFeedback}
          message={feedback.text}
        />
      ) : null}
    </div>
  );
}

export default Code;
