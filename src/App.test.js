import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import credit_card from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<credit_card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
