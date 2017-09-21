import React from 'react'
import { Badge } from 'antd';

import { ApiGetPostComments } from '../services/api';

class PostBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number_comments: 0,
    }
  }

  componentDidMount() {
    ApiGetPostComments(this.props.post_id).then((comments) => {
      this.setState({
        number_comments: comments.length,
      })
    })
  }

  render() {
    const { number_comments } = this.state;

    return(
      <Badge count={number_comments} />
    );
  }
}

export default PostBadge
