// @flow strict

import React, { Fragment } from 'react';

const scroll = (id: string) => {
  window.scroll({
    // $FlowFixMe NOTE(Jeremy): ignore all document/window flow errors
    top: document.getElementById(id).getBoundingClientRect().top,
    left: 0,
    behavior: 'smooth',
  });
};

const Home = () => (
  <Fragment>
    <div className='basic-tile'>
      <p className='link' onClick={() => scroll('info')}>Learn more</p>
    </div>
    <div className='scroll-box'>
      <div id='info'>
        <table>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'rgb(255, 255, 243)' }}>About us</th>
              <th style={{ backgroundColor: 'rgb(255, 243, 255)' }}>Information 1</th>
              <th style={{ backgroundColor: 'rgb(243, 255, 255)' }}>Location stuff</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </Fragment>
);

export default Home;
