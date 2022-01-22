const fetchAPI = async (url, method, data) => {
  const requestData = {
    method,
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  switch (method) {
    case 'GET':
      return fetch(url).then((res) => res.json());
    case 'POST':
      return fetch(url, requestData).then((res) => res.json());
    case 'PUT':
      return fetch(url, requestData).then((res) => res.json());
    case 'DELETE':
      return fetch(url, requestData).then((res) => res.json());
    default:
      return 'This request is not valid!';
  }
};

export default fetchAPI;
