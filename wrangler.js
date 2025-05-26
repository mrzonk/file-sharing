{
  "$schema": "https://unpkg.com/@cloudflare/wrangler@latest/config.schema.json",
  "name": "nama-worker-anda",
  "main": "server.js",
  "compatibility_date": "2024-05-27",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "vars": {
    "ENV_VARIABLE_NAME": "YOUR_VALUE"
  },
  "site": {
    "bucket": "./dist",
    "entry-point": "worker"
  }
}
