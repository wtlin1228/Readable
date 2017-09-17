
export default function ApiGetCategory(payload) {
  console.log('Service, call fetch, payload: ', payload);
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
      console.log('In service ', data);
      return data;
    })
  )
}