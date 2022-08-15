import React from 'react';

function Title({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default Title;
