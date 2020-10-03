import React from 'react';
import styles from './MarkdownInput.module.css';

import { InputGroup, FormControl } from 'react-bootstrap';


class MarkdownInput extends React.Component{
  constructor( props ){
    super( props );
  }
  render(){
    return(
      <div className={styles.MarkdownInput}>
        <InputGroup className="mb-3">
          <FormControl
            as="textarea"
            aria-label="" 
            className="full-screen input-textarea"
            placeholder={ this.props.inputPlaceholder }
            onChange={ this.props.saveInput }
            defaultValue={ this.props.defaultInputValue }
          />
        </InputGroup>
      </div>
    );
  }
}

export default MarkdownInput;