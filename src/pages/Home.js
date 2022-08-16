/* eslint-disable no-console */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    // eslint-disable-next-line no-console
    console.log(ev.target.value);
    setInput(ev.target.velue);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
    console.log(ev.keyCode);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
}

export default Home;
