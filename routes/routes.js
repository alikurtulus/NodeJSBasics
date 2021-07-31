const fs = require('fs');

const requestHandler = (req, res) => {
    if (req.url === '/users'){ 
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><ul><li>User 1</li></ul></body>')
        res.write('</html>')
    
        return res.end()
    }
    if (req.url === '/'){ 
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/create-user" method="post"><input type="text" name="username" /><button type="submit">Create User</button></form></body>')
        res.write('</html>')
    }
    if (req.url === '/create-user' && req.method ==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split("=")[1];
            console.log(username)
            fs.writeFile('message.txt', username , err => {
                res.statusCode = 302;
                res.setHeader('Location','/')
        
                return res.end()
            })
        })
    }
}
module.exports = {
    handler: requestHandler
}
