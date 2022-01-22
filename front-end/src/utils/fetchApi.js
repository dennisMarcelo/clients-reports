const fetchAPI = async (url, method, data) => {
  const requestData = {
    method,
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  return fetch(url, requestData).then((res) => res.json());
};

export default fetchAPI;
