function fetchData(url) {
  return fetch(url)
    .then(data => {
      return data.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchData };
