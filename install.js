var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'Restful Windows',
  description: 'Restful Windows',
  script: 'C:\\restful-windows\\index.js'
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', () => {
  svc.start()
})

svc.install()
