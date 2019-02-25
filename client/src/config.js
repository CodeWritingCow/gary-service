// Set URLs for React components to send GET requests to
// depending on whether the server is on AWS or localhost

let os = require('os');

export const config = {
    HOSTNAME: os.hostname(),
    AWS_URL: 'http://18.218.156.11/', // Change IP to your AWS EC2 instance's IPv4 Public IP
    LOCALHOST: 'http://localhost:3016'
}