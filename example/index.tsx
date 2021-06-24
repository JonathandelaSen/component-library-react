import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { PrimaryButton } from '../src/PrimaryButton';

const App = () => {
  return (
    <div>
      
      <PrimaryButton onClick={() => {}}>ASD</PrimaryButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
