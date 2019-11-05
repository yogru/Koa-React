import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import SelfIntroduceCardSaga from './containers/SelfIntroduceCardSaga';
import TecstackListSaga from './containers/TecstackListSaga';
import ToyListSaga from './containers/ToyListSaga';

function App() {
  return (
    <> 
      <SelfIntroduceCardSaga/>
        <TecstackListSaga/>
        <ToyListSaga/>
    </>
  );
}

export default App;
