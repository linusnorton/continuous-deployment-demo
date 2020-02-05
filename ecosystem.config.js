module.exports = {
    apps : [{
        name: "Your app",
        script: "npm start",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }],
    deploy : {
        production : {
            "ssh_options": "StrictHostKeyChecking=no",
            "key": "deploy",
            "user": "ubuntu",
            "host": ["3.8.141.48"],
            "ref": "origin/master",
            "repo": "git@github.com:linusnorton/continuous-deployment-demo.git",
            "path": "/home/ubuntu/continuous-demo",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js --env production",
            "env"  : {
                "NODE_ENV": "production"
            }
        }
    }
};
