import React from 'react';

import { Layout } from 'antd'

import WebHeader from '../components/WebHeader'
import WebFooter from '../components/WebFooter'
import PostDetailMain from '../components/PostDetailMain'

class PostDetail extends React.Component {
  render() {

    return (
      <Layout>
        <WebHeader />
        <PostDetailMain />
        <WebFooter />
      </Layout>
    )
  }
}

export default PostDetail