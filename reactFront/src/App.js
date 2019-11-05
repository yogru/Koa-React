import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import SelfIntroduceCard from './components/SelfIntroduceCard';
import SelfIntroduceCardSaga from './containers/SelfIntroduceCardSaga';
import TecstackListSaga from './containers/TecstackListSaga';

function App() {
  return (
    <> 
      <SelfIntroduceCardSaga/>
       <TecstackListSaga/>
    </>
  );
}

export default App;
