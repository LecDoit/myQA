let fs = require('fs')
let XMLDATA = fs.readFile('./twbx/test.twb')

let axios = require('axios')

axios
.get(XMLDATA,{'Content-Type':'application/xml; charset=utf-8'})
.then(function(response){
  console.log(response.data)
  self.setTest({test:response.data});
})
.catch(function(error){
  console.log(error)
})
