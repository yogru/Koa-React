import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import SelfIntroduceCardSaga from './containers/SelfIntroduceCardSaga';
import TecstackListSaga from './containers/TecstackListSaga';
import ToyListSaga from './containers/ToyListSaga';
import {Grid, GridItem} from './components/Grid';

function App() {
  return (
        <Grid rowCount= '3' colCount='1' height='300vh'>
            <GridItem>
                <SelfIntroduceCardSaga/>
            </GridItem>
             <GridItem>
                <TecstackListSaga/>
             </GridItem>
             <GridItem>
                <ToyListSaga/>
            </GridItem>
        </Grid>
  );
}

export default App;
