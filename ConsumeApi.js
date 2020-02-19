
//AT. This is my api Key....
const uuidv1 = require('uuid/v1');
//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=[APi-Key-here] HTTP/1', //URL to hit
    qs: {from: 'example', time: +new Date()}, //Query string data
    method: 'GET', // specify the request type
    headers: { // speciyfy the headers
        'Content-Type': 'application/json',
        'Custom-Header': 'ListName'
    },
    body: 'List is Coming!' //Set the body as a string
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});


// /*
// * Route to DEMO the API call to a REST API Endpoint 
// * REST URL : https://developer.nytimes.com/docs/books-product/1/overview
// */
// app.get('/getAPIResponse', (req, res) => {
//     api_helper.make_API_call('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=[APi-Key-here] HTTP/1')
//     .then(response => {
//         res.json(response)
//     })
//     .catch(error => {
//         res.send(error)
//     })
// })

// app.listen(port, () => console.log(`App listening on port ${port}!`))