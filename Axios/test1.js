axios.get('/hello')
    .catch(function (error) {
        if(error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })