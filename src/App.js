import React from 'react';
import './App.css';

import MarkDownRender from './components/MarkdownRender/MarkdownRender';

import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Container fluid >
          <Row>
            <Col>
              <div className="h1" >
                Markdown Renderer
              </div>
            </Col>
            <Col>
              <Row>
                <span>
                  <a href="https://iamarav.github.io/redirect/?to=github">
                  Github
                  </a>
                </span>
                &nbsp;|&nbsp;
                <span>
                  <a href="https://github.com/iamarav/Markdown-Renderer/" target="_blank" >
                    Fork
                  </a>
                </span>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <MarkDownRender />
            </Col>
          </Row>
        </Container>
      </div>
    );
}
}
export default App;
