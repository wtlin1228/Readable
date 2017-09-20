import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions'
import { Layout, Row, Col, Button } from 'antd';
import CommentTable from './CommentTable';
import NewCommentModal from './NewCommentModal';

const { Content } = Layout;

class PostDetailMain extends React.Component {
  constructor(props) {
    super(props);

    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  componentDidMount() {

  }

  handlePostDelete() {
    this.props.deletePost(this.props.postDetailReducer.post.id);
  }

  render() {
    const { post } = this.props.postDetailReducer;

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
              <Col offset={12} span={2}>
                <Link to='/post/form'>
                  <Button type="primary" size='large' ghost>Edit Post</Button>
                </Link>
              </Col>
              <Col offset={2} span={2}>
                <Link to='/'>
                  <Button type="danger" size='large' ghost onClick={this.handlePostDelete}>Delete Post</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <CommentTable/>
        <NewCommentModal />
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(PostDetailMain)
