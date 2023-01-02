var fs = require('fs')
var mv = require('mv')
var oldPath = '/media/sf_Workbooks/test.twb'
var newPath = '/home/piter/Projects/myQA/myqa/src/twbx/test.twb'

fs.copyFile(oldPath,newPath,function(err){
    if (err) throw err
    console.log('nice!')
})
fs.unlink