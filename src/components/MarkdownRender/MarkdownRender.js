import React from 'react';
import styles from './MarkdownRender.module.css';

import { Container, Row, Col } from 'react-bootstrap';

import MarkdownInput from '../MarkdownInput/MarkdownInput';
import MarkdownOutput from '../MarkdownOutput/MarkdownOutput';

class MarkdownRender extends React.Component{
  constructor(props){
    super( props );
    this.state = {
      inputPlaceholder: "Enter the markdown here...",
      inputValue: "# Hello World!"
      +"\n---"
      +"\n*Enter a value on the left and check output on the right.*",
    }
  }

  saveInput = ( event ) => {
    this.setState({
      inputValue: event.target.value
    })
    console.log( event.target.value )
  }

  render(){
    return (
      <div className={styles.MarkdownRender}>
        <Row>
          <Col>
            <MarkdownInput
              inputPlaceholder={ this.state.inputPlaceholder }
              saveInput={ this.saveInput }
              defaultInputValue={ this.state.inputValue }
            />
          </Col>
          <div className="vertical-line full-screen"></div>
          <Col>
            <MarkdownOutput
              inputValue={ this.state.inputValue }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MarkdownRender;