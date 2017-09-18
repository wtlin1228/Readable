import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions'
import { Row, Col, Table } from 'antd';

class PostTable extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  render() {
    const columns = [
      { title: 'title', dataIndex: 'title', key: 'title' },
      { title: 'author', dataIndex: 'author', key: 'author' },
      { title: 'category', dataIndex: 'category', key: 'category' },
      { title: 'voteScore', dataIndex: 'voteScore', key: 'voteScore', sorter: (a, b) => a.voteScore - b.voteScore,},
      { title: 'timestamp', dataIndex: 'timestamp', key: 'timestamp', sorter: (a, b) => a.timestamp - b.timestamp,},
    ];

    const data_default = [
      { key: 1,
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        description: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6
      },
      { key: 2,
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        description: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
      },
    ];

    console.log(this.props.postReducer.posts);

    const data = this.props.postReducer.posts;

    return (
      <Row type="flex" justify="center">
        <Col span={22} >
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
    postReducer: store.postReducer
  }
);

export default connect(mapStateToProps, actionCreators)(PostTable)
