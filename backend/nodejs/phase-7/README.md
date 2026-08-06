## Phase 7: Production Security & System Hardening

### 1. Web & Application Security

Apply standard security practices in your Node app. Guard against the OWASP Top 10: validate and sanitize all input to prevent SQL injection or NoSQL injection; use parameterized queries or ORM protections. To prevent ReDoS (regular-expression DoS), avoid unbounded or untrusted regex patterns on user input. Watch for JavaScript-specific issues like prototype pollution (don’t use `_.merge`-style functions on user data without safeguards). Use security headers (via the [helmet](https://github.com/helmetjs/helmet) middleware) to set CSP, HSTS, X-Content-Type-Options, etc. Configure CORS policies strictly (only allow known origins). Limit body sizes on JSON/URL-encoded parsers to prevent large payload abuse.

### 2. Runtime Security

Node 20+ offers an _experimental Permissions model_ to limit what system resources a process can access. You can run `node --permission` to activate it. For example, by default all fs/network/syscalls are blocked unless you add flags like `--allow-net` or `--allow-fs-read`. This is a “seat belt” to prevent accidental file writes or network calls. It’s not foolproof (malicious code can still escape), but it can add an extra layer.

For authentication/authorization, use proven libraries. For JWT-based auth, use a robust library (like `jsonwebtoken`) with RSA or ECDSA algorithms (e.g. RS256) for signatures. Store secrets/keys securely (e.g. in environment variables or a vault). Implement token expiration and rotation. For OAuth2/OpenID, use libraries like `passport.js` or `openid-client` to handle flows. Design roles/permissions carefully: e.g. define Role-Based Access Control (RBAC) if users fall into discrete roles, or ABAC (attribute-based) for more fine-grained policies. Always validate and sanitize user-supplied data even after authentication, and never trust client-side roles.

---
