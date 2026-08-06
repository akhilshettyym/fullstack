## Phase 4: Observability, Profiling & Debugging

Building robust applications requires tools for diagnosing issues:

- **Heap Snapshots:** To find memory leaks, you can capture V8 heap snapshots (files with `.heapsnapshot`) while your Node process runs. These snapshots can be loaded into Chrome DevTools (the same interface used for browser JS) to inspect object retention and sizes. The Node docs advise: _“Take a Heap Snapshot from your running application and load it into Chrome DevTools to inspect variables or check retainer sizes. Compare multiple snapshots to see differences over time”_. By comparing snapshots before and after a suspected leak, you can see which objects grow unexpectedly.

- **CPU Profiling:** For identifying slow code, use V8’s sampling profiler. Run Node with `--inspect` and use Chrome DevTools’ **Profiler** to record a session, or use `node --prof` to generate a V8 log and then `node --prof-process` to interpret it. For example, Node’s documentation shows a `--prof-process` output listing ticks spent in C++ vs JS. In a sample report, 97% of ticks were in C++ (mostly in `crypto.pbkdf2`), flagging that as a hotspot. Alternatively, tools like [Clinic.js](https://clinicjs.org) offer user-friendly flamegraphs (`clinic doctor` or `clinic flame`) to visualize CPU usage over time. In short, profiling tells you which functions (JS or native) consume the most time, so you can optimize or offload them (e.g. move work to worker threads or rewrite heavy parts in C++).

- **Async Context Tracking:** Keeping context (like request IDs or user sessions) across async calls can be tricky. Node provides `AsyncLocalStorage` (built on `async_hooks`) to attach data to a chain of async operations, similar to thread-local storage. This lets you do, say, `als.run(ctx, () => app.handleRequest(req));` and any asynchronous callbacks can later retrieve the original `ctx`. The docs recommend using `AsyncLocalStorage` (stable since Node 12) for performant async context propagation.

- **Advanced Error Handling:** Distinguish operational errors (recoverable, e.g. failed DB query) from programmer errors (bugs). Use try/catch or promise `.catch()` for expected errors, and propagate or log as needed. For truly uncaught exceptions or promise rejections, Node emits global events:  
  – `'uncaughtException'`: if thrown but not caught, Node’s default is to print the stack and exit with code 1. You can attach a handler (`process.on('uncaughtException')`) to do cleanup, but best practice is to exit the process (do NOT resume normal operation). The docs warn that after an uncaught exception the process state is unreliable, so you should _log and exit_, then let a supervisor restart.  
  – `'unhandledRejection'`: if a Promise rejection is never handled, Node emits this event. The default in modern Node is to throw (or at least warn) on unhandled rejections. Always attach `.catch()` to Promises or use `process.on('unhandledRejection')` to catch them. As with exceptions, if you catch one, consider logging and terminating.

Global handlers in Node can help log diagnostic info on shutdown, but they are not substitutes for proper error checking in your code.

---
