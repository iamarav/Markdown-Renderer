import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './MarkdownInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});