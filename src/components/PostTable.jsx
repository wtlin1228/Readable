import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions'
import { Row, Col, Table, Button } from 'antd';
import PostBadge from './PostBadge';

class PostTable extends React.Component {
  constructor() {
    super();

    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.dateCmp = this.dateCmp.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts('all');
  }

  handleDetailClick(id) {
    this.props.getPostDetail(id);
  }

  dateCmp(a, b) {
    const d1 = a.split('/');
    const d2 = b.split('/');

    return parseInt(d1[0] + d1[1] + d1[2]) - parseInt(d2[0] + d2[1] + d2[2])
  }

  render() {
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
      { title: 'timestamp', dataIndex: 'timestamp', key: 'timestamp',
        sorter: (a, b) => {
          return this.dateCmp(a.timestamp, b.timestamp)
        },
      },
      { title: 'detail', dataIndex: 'id', key: 'detail', render: (text) => {
        return <Link to='/post/' onClick={() => this.handleDetailClick(text)}><Button type="primary">Detail</Button></Link>} },
    ];

    const data = this.props.postReducer.posts.filter((post) => {
      if(this.props.category === 'all') return true;
      return post.category == this.props.navigationReducer.navigate_category
    });

    return (
      <Row type="flex" justify="center">
        <Col span={20} >
          <Table
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
