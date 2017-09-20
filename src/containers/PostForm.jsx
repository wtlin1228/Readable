import React from 'react';

import { Layout } from 'antd'

import WebHeader from '../components/WebHeader'
import WebFooter from '../components/WebFooter'
import PostFormMain from '../components/PostFormMain'

class PostForm extends React.Component {
  render() {

    return (
      <Layout>
        <WebHeader />
        <PostFormMain />
        <WebFooter />
      </Layout>

    )
  }
}

export default PostForm