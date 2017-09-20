import React from 'react'
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

class WebFooter extends React.Component {
  constructor() {
    super();
  }

  render() {
    const rowStyle = {
      'backgroundColor': '#404040',
    };

    const pStyle = {
      'color': '#8e959c',
    };

    return (
      <Footer style={rowStyle}>
        <Row type="flex" justify="center" >
          <Col>
            <p style={pStyle}>Udacity Readable Project by Leo Lin.</p>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default WebFooter
