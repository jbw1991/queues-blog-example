# Installing dependencies (including wrangler@queues)

```bash
npm ci
```

# Running the local dev server

```bash
npx wrangler dev -l
```

# Sending requests

* Send a single request:
```
curl localhost:8787 -d "hello"
```

* Send requests with an incrementing counter once per second:
```
npm run simple_load
```