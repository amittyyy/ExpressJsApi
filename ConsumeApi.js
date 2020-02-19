
const express = require('express')
const api_helper = require('./HelperCall')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://developer.nytimes.com/docs/books-product/1/overview
*/
app.get('/getAPIResponse', (req, res) => {   
    
    //https://api.nytimes.com/svc/books/v3/lists.json?list=Hardcover%20Fiction&api-key=[YOUR_API_KEY] HTTP/1.1
    //https://api.nytimes.com/svc/books/v3/reviews.json?title=1Q84&api-key=KqA3qcknA9LHQRm94Ga1vBuIlaj2n2jQ
    api_helper.make_API_call('https://api.nytimes.com/svc/books/v3/lists.json?list=Hardcover%20Fiction&api-key=KqA3qcknA9LHQRm94Ga1vBuIlaj2n2jQ')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))