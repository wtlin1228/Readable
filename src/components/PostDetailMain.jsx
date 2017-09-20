import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Button } from 'antd';
import CommentTable from './CommentTable';

const { Content } = Layout;

class PostDetailMain extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const { post, comments } = this.props.postDetailReducer;

    const pStyle = {
      'fontSize': '20px',
      'margin': '5px',
    };

    const bodyStyle = {
      'fontSize': '35px',
      'margin': '5px',
    };

    const rowStyle = {
      'margin': '20px'
    };

    return (
      <Content>
        <Row style={rowStyle}>
          <Col offset={2} span={6}>
            <p style={pStyle}>{'Title : ' + post.title}</p>
            <p style={pStyle}>{'Author : ' + post.author}</p>
            <p style={pStyle}>{'Vote Score : ' + post.voteScore}</p>
            <p style={pStyle}>{'Time : ' + post.timestamp}</p>
          </Col>
          <Col offset={2} span={12}>
            <p style={bodyStyle}>{post.body}</p>
            <Row style={rowStyle}>
              <Col span={2}>
                <Button type="dashed" size='large'>Good</Button>
              </Col>
              <Col offset={1} span={2}>
                <Button type="dashed" size='large'>Bad</Button>
              </Col>
              <Col offset={12} span={2}>
                <Button type="primary" size='large'>Edit</Button>
              </Col>
              <Col offset={1} span={2}>
                <Button type="danger" size='large'>Delete</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <CommentTable/>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, )(PostDetailMain)
