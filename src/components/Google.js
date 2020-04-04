import React, { useEffect } from 'react';

function Google() {
  useEffect(() => {
    (window.adsbygoogle || []).push({});
  }, [])
  return (
    <div style={{ overflow: 'hidden'}}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-3389773486006292'
        data-ad-slot='3538683662'
        data-ad-format='horizontal'
        data-full-width-responsive='true'
      ></ins>

    </div>
  );
}

export default Google;
