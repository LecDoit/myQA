var fs = require('fs')
var mv = require('mv')
// var oldPath = '/media/sf_Workbooks/test.twb'
// var newPath = '/home/piter/Projects/myQA/myqa/src/twbx/test.twb'
var oldPath = '/media/sf_Workbooks/MGB2.twb'
var newPath = '/home/piter/Projects/myQA/myqa/src/twbx/MGB2.twb'

fs.copyFile(oldPath,newPath,function(err){
    if (err) throw err
    console.log('nice!')
})
fs.unlink