import React from 'react';

const ProgressBar = ({ text, type }) => {
  const klass = `progress-bar progress-bar-striped progress-bar-animated ${type}`;

  return (
    <div className='progress'>
      <div
        className={klass}
        role='progressbar'
        aria-valuenow='0'
        aria-valuemin='0'
        aria-valuemax='100'
        style={{ width: '100%' }}
      >
        {text}
      </div>
    </div>
  );
};

export default ProgressBar;
