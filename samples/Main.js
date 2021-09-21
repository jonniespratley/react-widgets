import React from 'react';
import RecentWidget from '@webex/widget-recents'
import BasicComponents from './BasicComponents';
import RecentsComponents from './recents-components';

function Main() {
  return (
    <div>
      <h1>React Samples</h1>

      <RecentWidget accessToken="Y2lzY29zcGFyazovL3VzL1JPT00vOWM4N2U1MTAtZDM5ZC0xMWViLTllOGEtZWQ5ZDVkMDdlY2Iw"/>


      <h2>Basic Components</h2>
      <BasicComponents />
      <h2>Recents Components</h2>

      <br/>
      <RecentsComponents />
      <h2>Base Elements that should not be modified by momentum css</h2>
      <p><a href=".">Link</a></p>
      <p><b>bold</b></p>
    </div>
  );
}

export default Main;
