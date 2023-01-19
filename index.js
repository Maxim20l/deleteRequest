const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer();
server.on('request', async (req, res) => {
    try {
        const url = req.url.slice(1);
        fs.rm(url, { recursive: true }, (error) => {
            console.log(error);
        })
        
        if (!fs.existsSync(url)) {
            console.log(200);
        } else if (!!fs.existsSync(url)) {
            throw new Error('cant file')
        }

        res.end()
    } catch (error) {
        if (error.message === 'cant file') {
            res.end('404')
        }
        console.log(error.message);
    }

})

server.listen(3000)