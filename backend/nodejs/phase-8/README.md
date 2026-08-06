## Phase 8: Architecture, Design Patterns & Testing

### 1. Design Patterns & System Architecture

As you design large systems, apply proven patterns. For example, use the **Repository** pattern to abstract database access, **Factory** or **Builder** patterns to create complex objects, and **Dependency Injection** (DI) to manage module dependencies and improve testability. The **Observer** pattern underlies many event systems (like EventEmitter). For large applications, consider **Clean Architecture** or **Domain-Driven Design** (DDD) to separate concerns: keep business logic isolated from web/API layers and from infrastructure (DB, messaging). This means your core logic can be tested independently of Express/Fastify or your database.

For cross-service communication and decoupling, use **message queues** and background job processing. Popular choices in Node include [BullMQ](https://docs.bullmq.io/) (on Redis) for job queues, [RabbitMQ](https://www.rabbitmq.com/) for robust messaging, or [Apache Kafka](https://kafka.apache.org/) for high-throughput log-based messaging. Offload non-critical work (emails, image processing, analytics) to these asynchronous jobs to keep your API responses fast and responsive.

### 2. Native Testing & Quality Assurance

Node now includes a built-in test runner (`node:test`, introduced in Node 18) along with the `assert` module. You can write tests as:

```js
import test from "node:test";
import assert from "node:assert";

test("math works", (t) => {
  assert.strictEqual(1 + 1, 2);
});
```

Run them with `node --test`. By default it picks up `*.test.js` files. It even supports watch mode (`node --test --watch`) and randomizing test order (`--test-randomize`) to catch inter-test dependencies. Use this for unit tests. For integration tests (e.g. HTTP routes), use tools like [`supertest`](https://github.com/ladjs/supertest) to simulate requests. Mock external dependencies (DB, network) where practical. Aim for good coverage of business logic and critical paths.

If you use TypeScript, Node can run `.ts` files natively by _stripping types_ at runtime. On Node 22.18+, you can just `node index.ts` and it will run (it removes type annotations under the hood). On earlier Node versions, use the `--experimental-strip-types` flag. Note this does **not** do type checking; it merely erases types. You should still run `tsc --noEmit` in CI or your editor to catch type errors. When using TS, enable strict mode (`"strict": true`) and good typings for all modules.
