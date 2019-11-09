const { spawn } = require('child_process');

const child = spawn('node', ['server/config']);

setTimeout(() => {
    const cp = spawn('bash', ['./coverage.sh']);
    cp.stdout.on('data', (data) => {
        console.log(data.toString())
    });
    
    cp.stderr.on('data', (data) => {
        console.log(data.toString());   
    });
    
    cp.on('close', (code) => {
        child.kill();
        console.log(`child process exited with code ${code}`);
    });
}, 3000);
