const url = 'https://koreanjson.com/posts/1';

function getData() {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(function (response) {
      if (response) {
        resolve(response.data);
      }
      reject(new Error('Request is failed'));
    });
  });
}

let result = [];
getData()
  .then(function (data) {
    for (let v of Object.values(data)) {
      result.push(v);
    }
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  });