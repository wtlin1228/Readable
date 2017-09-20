export function ApiGetCategory() {
  return(
    fetch(
      'http://localhost:3001/categories',
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'get',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}

export function ApiGetPosts(category) {
  let endpoint = '';
  switch(category) {
    case 'all':
      endpoint = '/posts';
      break;
    case 'react':
      endpoint = '/react/posts';
      break;
    case 'redux':
      endpoint = '/redux/posts';
      break;
    case 'udacity':
      endpoint = '/udacity/posts';
      break;
    default:
      endpoint = '/posts';
  }

  return(
    fetch(
      'http://localhost:3001' + endpoint,
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'get',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}

export function ApiGetPostDetail(post_id) {
  return(
    fetch(
      'http://localhost:3001/posts/' + post_id,
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'get',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}

export function ApiGetPostComments(post_id) {
  return(
    fetch(
      'http://localhost:3001/posts/' + post_id + '/comments',
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'get',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}

export function ApiDeletePost(post_id) {
  return(
    fetch(
      'http://localhost:3001/posts/' + post_id,
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'DELETE',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    })
  )
}

export function ApiUpdatePost(post_id, title, body) {
  return(
    fetch(
      'http://localhost:3001/posts/' + post_id,
      {
        method: 'PUT',
        headers: {
          'Authorization': 'wtlin',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    })
  )
}

export function ApiNewComment(post_id, body, author) {
  return(
    fetch(
      'http://localhost:3001/comments',
      {
        method: 'POST',
        headers: {
          'Authorization': 'wtlin',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Date.now(),
          timestamp: Date.now(),
          body: body,
          author: author,
          parentId: post_id,
        }),
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    })
  )
}


export function ApiDeleteComment(comment_id) {
  return(
    fetch(
      'http://localhost:3001/comments/' + comment_id,
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'DELETE',
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    })
  )
}

export function ApiUpdateComment(comment_id, body) {
  return(
    fetch(
      'http://localhost:3001/comments/' + comment_id,
      {
        method: 'PUT',
        headers: {
          'Authorization': 'wtlin',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: body,
          timestamp: Date.now(),
        }),
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    })
  )
}