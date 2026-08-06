## Phase 5: Web Frameworks, APIs & Communications

### 1. Low-Level HTTP & Modern Frameworks

At the lowest level, Node’s built-in `http` (and `http2`) modules let you handle requests yourself. A Node HTTP server works with request/response streams under the hood, so you can stream data and use chunked transfer-encoding automatically. (If you don’t set `Content-Length`, Node will automatically send chunked responses for you.)

Many projects use frameworks for routing and middleware. **Express** is the classic minimalist framework with middleware functions; it builds a pipeline where each middleware can handle or pass on requests. In contrast, **Fastify** is a newer high-performance framework. Fastify uses a schema-based approach: if you provide a JSON schema for output, it will use [`fast-json-stringify`](https://github.com/fastify/fast-json-stringify) to serialize responses, which can drastically speed up JSON output. Fastify also has an encapsulation/plugin system: plugins and decorators are scoped by context, preventing accidental cross-talk between parts of the app. In short, Fastify trades some familiarity for significantly higher throughput and built-in schema validation.

Node also natively supports HTTP/2 via the `http2` module. This provides full HTTP/2 features (binary framing, multiplexed streams, header compression, server push) in a low-level API. For many apps, `http2.createSecureServer()` can replace an `https` server. Fastify and Express have plugins/middlewares for HTTP/2, but at the core it’s just another API.

### 2. API Protocols

- **REST Best Practices:** Follow HTTP and REST conventions. Use proper status codes (e.g. 200 OK, 201 Created, 4xx for client errors, 5xx for server errors) and clear error messages. Design versioning into your API (for example `/api/v1/...`). Consider hypermedia (HATEOAS) if hypermedia-driven clients are needed, but many APIs use simpler JSON responses. Define and document your endpoints, and use tools like OpenAPI to formalize contracts.

- **gRPC/ProtoBuf:** For high-throughput microservices, Node can act as a gRPC server or client. gRPC uses Protocol Buffers (a binary serialization with a schema) over HTTP/2. It provides strong typing via `.proto` files, built-in streaming, and low-overhead communication. In Node, you’d typically use the `@grpc/grpc-js` library. This can be more performant than REST for service-to-service calls, especially at scale, but it requires a compiled schema and is less human-readable than JSON.

- **Real-time Web (WebSockets & SSE):** For push or real-time features, WebSockets are common. In Node, you can use libraries like [`ws`](https://github.com/websockets/ws) or Socket.IO. Socket.IO builds on WebSockets (with fallbacks) and adds rooms/namespaces; to scale Socket.IO you often use the [socket.io-redis](https://socket.io/docs/v4/using-multiple-nodes/#adapter-redis) adapter so different Node instances can broadcast messages via Redis. For simple server-sent events (SSE), you can use `res.write()` on an HTTP response with the `text/event-stream` content type – Node’s streams make this easy. Whichever real-time method you choose, ensure you handle horizontal scaling (e.g. share pub/sub state via Redis or a message broker so that clients connected to different processes still see all messages).

---
