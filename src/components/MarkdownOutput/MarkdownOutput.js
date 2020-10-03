import React from 'react';

const ReactMarkdown = require('react-markdown')

class MarkdownOutput extends React.Component{
  render(){
    let markdown = this.props.inputValue;
    return (
      <ReactMarkdown
        source={markdown}
        escapeHtml={true}
        // astPlugins={[parseHtml]}
      />
    );
  }
}

export default MarkdownOutput;