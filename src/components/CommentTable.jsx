import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions'
import { Row, Col, Table, Button } from 'antd';


class CommentTable extends React.Component {
  constructor() {
    super();

    this.dateCmp = this.dateCmp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {

  }

  handleDelete(comment_id) {
    this.props.deleteComment(this.props.postDetailReducer.post.id, comment_id)
  }

  dateCmp(a, b) {
    const d1 = a.split('/');
    const d2 = b.split('/');

    return parseInt(d1[0] + d1[1] + d1[2]) - parseInt(d2[0] + d2[1] + d2[2])
  }

  render() {
    const buttonStyle = {
      'margin': '5px',
    };

    const rowStyle = {
      'margin': '20px'
    };

    const columns = [
      { title: 'comment', dataIndex: 'body', key: 'body' },
      { title: 'author', dataIndex: 'author', key: 'author' },
      { title: 'voteScore', dataIndex: 'voteScore', key: 'voteScore', sorter: (a, b) => a.voteScore - b.voteScore,},
      { title: 'timestamp', dataIndex: 'timestamp', key: 'timestamp',
        sorter: (a, b) => {
          return this.dateCmp(a.timestamp, b.timestamp)
        },
      },
      { title: 'Action', dataIndex: 'id', key: 'detail', render: (text) => {
        return [
          (<Button style={buttonStyle} key='edit' type="primary">Edit</Button>),
          (<Button style={buttonStyle} key='delete' type="danger" onClick={() => this.handleDelete(text)}>Delete</Button>)
        ]}},
    ];


    return (
      <Row type="flex" justify="center" style={rowStyle}>
        <Col span={20} >
          <Table
            columns={columns}
            dataSource={this.props.postDetailReducer.comments}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = store => (
  {
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(CommentTable)
