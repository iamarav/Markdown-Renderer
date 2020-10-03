import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownRender from './MarkdownRender';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownRender />, div);
  ReactDOM.unmountComponentAtNode(div);
});