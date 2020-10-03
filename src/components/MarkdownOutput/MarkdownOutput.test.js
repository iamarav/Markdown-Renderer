import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownOutput from './MarkdownOutput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownOutput />, div);
  ReactDOM.unmountComponentAtNode(div);
});