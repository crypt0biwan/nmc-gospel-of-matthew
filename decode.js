const gospel = require('./gospel-sorted.json')

gospel.forEach(function(item) {
    let buf = Buffer.from(item.name_values, 'base64')
    let txt = buf.toString('utf-8').replace(/�/g,'')
    
    console.log(`${txt}\n`)
})

// Cheers, Obi :-)