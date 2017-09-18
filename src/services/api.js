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
      endpoint = '/redux/redux';
      break;
    case 'udacity':
      endpoint = '/udacity/udacity';
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

