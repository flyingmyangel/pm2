module.exports = {
  apps: [{
    name: 'pm2-config-file', // 文件名字
    script: 'pm2/http.js', // 要执行的脚本
    args: 'a b', // 传入的参数
    instances: 2, // 当前实例个数，就是一个集群包含几个服务
    autorestart: true, // 服务宕机后是否重启
    max_memory_restart: '1G', // 当前占用内存
    watch: '.', // 监控文件
    env: { // 配置环境变量
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy: { // 部署
    production: {
      user: 'root', // 用户名
      host: '47.93.250.225', // 服务器的域名或者IP
      ref: 'origin/master', // 拉取分支
      repo: 'https://github.com/flyingmyangel/pm2.git', // git的仓库地址
      path: '/home', // 上传到服务器的home目录下
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
