import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions'
import { Row, Col, Table, Button, Modal, Input } from 'antd';
const { TextArea } = Input;


class CommentTable extends React.Component {
  constructor() {
    super();

    this.dateCmp = this.dateCmp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.state = {
      visible: false,
      description: '',
    }
  }

  componentDidMount() {

  }

  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk(comment_id) {
    this.props.updateComment(
      this.props.postDetailReducer.post.id,
      comment_id,
      this.state.description
    );

    this.setState({
      visible: false,
      description: '',
    });
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
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
      'width': '100px',
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
          (<div key={'div-edit'+text}>
            <Button style={buttonStyle} key={'edit'+text} type="primary" onClick={this.showModal}>Edit</Button>
            <Modal
              title='Edit Comment'
              visible={this.state.visible}
              onOk={() => this.handleOk(text)}
              onCancel={this.handleCancel}
              okText='Change'
              cancelText='Cancel'
            >
              <TextArea
                placeholder="Enter Comment"
                value={this.state.description}
                onChange={this.onChangeDescription}
                autosize
                ref={node => this.descriptionInput = node}
              />
            </Modal>
          </div>),
          (<Button style={buttonStyle} key={'delete'+text} type="danger" onClick={() => this.handleDelete(text)}>Delete</Button>)
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
