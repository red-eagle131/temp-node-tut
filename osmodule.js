const os = require('os')

//info about the cuurrent user

const user=os.userInfo()

console.log(user)

// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const curr={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(curr)

