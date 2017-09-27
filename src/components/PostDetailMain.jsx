import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import * as actionCreators from '../actions'
import { Layout, Row, Col, Button } from 'antd';
import CommentTable from './CommentTable';
import NewCommentModal from './NewCommentModal';

const { Content } = Layout;

class PostDetailMain extends React.Component {
  constructor(props) {
    super(props);

    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);

    this.state = {
      redirect: false,
    }
  }

  componentDidMount() {
    const { url } = this.props.match;

    this.props.getPostDetail(url.split('/')[2]);

    const post = this.props.postReducer.posts.filter((post) => {
      return post.id == url.split('/')[2]
    });

    if (post.length === 0){
      this.setState({
        redirect: true
      })
    }
  }

  handlePostDelete() {
    this.props.deletePost(this.props.postDetailReducer.post.id);
  }

  handleVoteUp() {
    this.props.likeThePost(this.props.postDetailReducer.post.id);
  }

  handleVoteDown() {
    this.props.dislikeThePost(this.props.postDetailReducer.post.id);
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

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
            <Row>
              <p style={pStyle}>{'Title : ' + post.title}</p>
            </Row>
            <Row>
            <p style={pStyle}>{'Author : ' + post.author}</p>
            </Row>
            <Row>
              <Col span={10}>
                <p style={pStyle}>{'Vote Score : ' + post.voteScore}</p>
              </Col>
              <Col span={3}>
                <Button type="primary" shape="circle" icon="like" size="large" onClick={this.handleVoteUp}/>
              </Col>
              <Col span={3}>
                <Button type="primary" shape="circle" icon="dislike" size="large" onClick={this.handleVoteDown}/>
              </Col>
            </Row>
            <Row>
              <p style={pStyle}>{'Time : ' + post.timestamp}</p>
            </Row>
          </Col>
          <Col offset={2} span={12}>
            <p style={bodyStyle}>{post.body}</p>
            <Row style={rowStyle}>
              <Col offset={12} span={2}>
                <Link to={'/' + post.category + '/' + post.id + '/' + 'edit'}>
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
    postReducer: store.postReducer,
    postDetailReducer: store.postDetailReducer,
  }
);

export default withRouter(connect(mapStateToProps, actionCreators)(PostDetailMain))
