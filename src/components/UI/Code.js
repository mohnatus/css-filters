import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';

import copy from 'copy-to-clipboard';
import CopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    background: palette.grey[100],
    padding: spacing(1),
    paddingLeft: spacing(2),
    position: 'relative',
  },
  button: {
    position: 'absolute',
    top: '-1.2em',
    left: '-1em',
    padding: spacing(1),
    minWidth: 0,
    color: palette.text.disabled,
    '&:hover, &:active, &:focus': {
      color: palette.primary.main
    }
  },
  code: {
    whiteSpace: 'normal'
  }
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
        text: 'CODE IS COPIED TO CLIPBOARD',
        error: false,
      });
    } else {
      setFeedback({
        text: 'FAILED TO COPY',
        error: true,
      });
    }
  }

  return (
    <div className={classes.root}>
      <pre ref={codeRef} className={classes.code}>{children}</pre>
      <Tooltip title='Copy'>
        <IconButton
          onClick={copyHandler}
          className={classes.button}
          size='small'
        >
          <CopyIcon fontSize="small" color='inherit' />
        </IconButton>
      </Tooltip>

      {feedback ? (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open
          onClose={() => setFeedback(null)}
          message={feedback.text}
        />
      ) : null}
    </div>
  );
}

export default Code;
