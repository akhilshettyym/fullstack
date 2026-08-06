## Phase 6: Persistence, Caching & Data Systems

### 1. Relational & NoSQL Databases

- **SQL with ORMs/Query Builders:** Many Node apps use ORMs or query builders to interact with SQL databases. Newer libraries include **Prisma**, **Drizzle**, or **Kysely**. These tools let you write high-level code (and sometimes auto-generate schema/migrations) while managing connection pools under the hood. Connection pooling is critical: it ensures your app doesn’t open a new DB connection for every request, which would exhaust the database. Most libraries handle pooling internally (e.g. Prisma’s query engine or Knex’s pool). Regardless of tool, ensure you create indexes on frequently queried columns, use parameterized queries to avoid SQL injection, and tune your queries for performance (explain plans, avoid N+1 patterns, etc.).

- **MongoDB (NoSQL):** With MongoDB, you can use the official `mongodb` driver or an ODM like **Mongoose**. Key best practices include using indexes on query fields, projecting only needed fields, and being mindful of MongoDB’s locking model (shards, indexes to avoid scans). The aggregation pipeline allows efficient data processing on the server side. In Mongoose, define schemas carefully and validate data. Also watch out for large documents: try to keep BSON document size reasonable (<16MB) to avoid overhead.

### 2. In-Memory Stores

- **Redis:** Redis is commonly used for caching, session storage, and simple pub/sub. When caching, common patterns include _cache-aside_ (the app checks Redis first; on miss, loads from DB and populates cache) or _write-through_ (writes go to cache and DB together). The Redis docs even describe query caching as a form of cache-aside. For rate limiting or counters, you can use Redis’ atomic INCR commands with expiration. For pub/sub (e.g. cross-process events), Node has clients like `ioredis` to publish/subscribe. For example, Socket.IO’s Redis adapter uses Redis pub/sub to broadcast between processes. Make sure to set appropriate key expiration and a sensible key namespace to avoid collisions.

---
