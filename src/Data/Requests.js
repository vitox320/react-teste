const axios = require('axios');

class Request {

    svc = () => {
        axios.get('localhost:8080/gepat/index.php')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    /*gepat = () => {
        axios.get('http://transonline2.salvador.ba.gov.br/gepat/web/index.php/site/login')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }*/

}

export default Request