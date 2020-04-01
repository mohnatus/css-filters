import React, { createRef } from 'react';
import { useTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import copy from 'copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';


function Code({ children }) {
  const [feedback, setFeedback] = React.useState(null);

  const theme = useTheme();
  const codeRef = createRef();

  function copyHandler() {
    const text = codeRef.current.textContent;
    const result = copy(text);
    if (result) {
      setFeedback({
        text: 'COPIED',
        error: false
      });
    } else {
      setFeedback({
        text: 'ERROR',
        error: true
      })
    }
  }

  function hideFeedback() {
    setFeedback(null);
  }

  return (
    <div
      style={{
        background: grey[100],
        padding: theme.spacing(2),
        position: 'relative',
        marginTop: theme.spacing(2),
      }}
    >
      <pre ref={codeRef}>{children}</pre>

      <Button
        onClick={copyHandler}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        color='primary'
        size='small'
      >
        Copy
      </Button>

      { feedback ? (<Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open
        onClose={hideFeedback}
        message={feedback.text}
      />) : null }


    </div>
  );
}

export default Code;
