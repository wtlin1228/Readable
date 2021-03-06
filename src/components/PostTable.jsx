import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions'
import { Row, Col, Table, Button } from 'antd';
import PostBadge from './PostBadge';

class PostTable extends React.Component {
  constructor() {
    super();

    this.dateCmp = this.dateCmp.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts('all');
  }

  handleVoteUp(post_id) {
    this.props.likeThePostRoot(post_id);
  }

  handleVoteDown(post_id) {
    this.props.dislikeThePostRoot(post_id);
  }

  dateCmp(a, b) {
    const d1 = a.split('/');
    const d2 = b.split('/');

    return parseInt(d1[0] + d1[1] + d1[2]) - parseInt(d2[0] + d2[1] + d2[2])
  }

  render() {
    const { navigate_category } = this.props.navigationReducer;

    const voteStyle = {
      'margin': '10px',
    };

    const columns = [
      { title: 'title', dataIndex: 'title', key: 'title' },
      { title: 'comments', dataIndex: 'id', key: 'comments' ,
        render: (text) => {
          return <PostBadge post_id={text}/>
        }
      },
      { title: 'author', dataIndex: 'author', key: 'author' },
      { title: 'category', dataIndex: 'category', key: 'category' },
      { title: 'voteScore', dataIndex: 'voteScore', key: 'voteScore', sorter: (a, b) => a.voteScore - b.voteScore,},
      { title: 'vote', dataIndex: 'id', key: 'vote', render: (text) => {
        return (
          <div>
            <Button type="primary" shape="circle" icon="like" size="large" style={voteStyle} onClick={() => this.handleVoteUp(text)}/>
            <Button type="primary" shape="circle" icon="dislike" size="large" style={voteStyle} onClick={() => this.handleVoteDown(text)}/>
          </div>
        )
      }},
      { title: 'timestamp', dataIndex: 'timestamp', key: 'timestamp',
        sorter: (a, b) => {
          return this.dateCmp(a.timestamp, b.timestamp)
        },
      },
      { title: 'detail', dataIndex: 'id', key: 'detail', render: (text, id) => {
          return <Link to={id.category + '/' + text} ><Button type="primary">Detail</Button></Link>
        }
      },
    ];

    const data = this.props.postReducer.posts.filter((post) => {
      if(this.props.category === 'all') return true;
      return post.category == navigate_category
    });

    return (
      <Row type="flex" justify="center">
        <Col span={20} >
          <Table
            rowKey="id"
            columns={columns}
            expandedRowRender={record => <p>{record.body}</p>}
            dataSource={data}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = store => (
  {
    postReducer: store.postReducer,
    navigationReducer: store.navigationReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(PostTable)
