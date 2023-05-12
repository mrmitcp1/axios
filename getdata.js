const axios = require("axios");
function getData() {
    return new Promise(function (resolve){
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(function (jason) {
                resolve(jason.data)
            })
    })

}
getData().then(result=>{
    console.log(result)
})