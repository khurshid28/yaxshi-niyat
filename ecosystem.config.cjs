const path = require('path')
const appDir = path.resolve(__dirname)

const baseEnv = {
  NODE_ENV: 'production',
  HOSTNAME: '0.0.0.0',
  POSTGRES_URL: 'postgres://yaxshiniyat:ImM9J~w78v21@localhost:5432/dboyaxshiniyat',
  PAYLOAD_SECRET: '75c98a9def0e3a58eaabcc5e',
  NEXT_PUBLIC_SERVER_URL: 'http://localhost:3000',
  SITE_URL: 'http://localhost:3000',
  SMTP_HOST: 'smtp.gmail.com',
  SMTP_PORT: '587',
  SMTP_USER: 'info@yaxshiniyat.uz',
  SMTP_PASS: 'pgog cspb bvdh naeh',
  SMTP_FROM: 'info@yaxshiniyat.uz',
}

module.exports = {
  apps: [3000, 3001, 3002].map((port, i) => ({
    name: `yaxshiniyat-${i}`,
    script: '.next/standalone/server.js',
    cwd: appDir,
    env: { ...baseEnv, PORT: port },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    error_file: path.join(appDir, 'logs', `error-${i}.log`),
    out_file: path.join(appDir, 'logs', `out-${i}.log`),
  })),
}
