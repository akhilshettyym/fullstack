## Phase 3: Concurrency, Multithreading & Scaling

Although JavaScript itself runs on a single thread, Node provides several ways to scale or parallelize work:

- **Child Processes (`child_process` module):** You can spawn separate processes using `child_process.spawn()`, `exec()`, `execFile()`, or `fork()`. The differences are:
- `spawn(command, args)`: launches a process with streaming I/O (you get `ChildProcess.stdout`/stderr as streams) without a shell.
- `exec(command)`: runs `command` in a shell, buffers the output, and invokes a callback or returns a promise with the result. (Beware shell injection if you concatenate user input!)
- `execFile(path, args)`: like `exec()`, but runs the executable at `path` directly without a shell, so it’s slightly more efficient and safer on Unix.
- `fork(modulePath)`: a special form of `spawn()` that runs a new Node.js process and establishes an IPC channel back to the parent. This is useful for offloading tasks to another Node process. The docs note: _“child_process.fork() is a special case of spawn used specifically to spawn new Node.js processes. It returns a ChildProcess with an IPC communication channel”_.

Using child processes, parent and child can communicate via `child.send(message)` and `process.on('message', handler)`. Remember that each process has its own memory space (no shared heap). On Windows, fork behavior differs slightly due to lack of true `fork(2)`. Spawning too many processes can overwhelm system resources, so use with care.

- **Worker Threads (`worker_threads` module):** If you need true shared-memory multithreading for CPU-bound JavaScript, the `worker_threads` module (stable since Node 12) is available. A `Worker` runs in its own thread with its own V8 instance. You communicate via message passing or by sharing `SharedArrayBuffer`/`ArrayBuffer` objects. For example, you can transfer an `ArrayBuffer` to a worker or have multiple workers share a `SharedArrayBuffer` and coordinate with the `Atomics` API. The Node docs emphasize that _“Workers are useful for performing CPU-intensive JavaScript operations… Unlike child_process, worker_threads can share memory (via ArrayBuffer/SharedArrayBuffer)”_. Use this for parallelizing heavy computation (e.g. data processing, image generation) while keeping the main thread free.

- **Clustering (`cluster` module):** The built-in `cluster` module (stable but less used in newer code, since you can also use multiple Node processes manually) allows you to fork multiple worker processes that all listen on the same server port. Internally, it uses round-robin load balancing: the primary Node process listens on the port and distributes incoming connections to worker processes. In effect, you get true multicore concurrency with shared server ports. The docs explain: _“The primary process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion”_. Each worker is created via `child_process.fork()` and communicates via IPC. Clustering is a simple way to utilize all CPU cores for a network server, but remember that workers cannot directly share memory – use an external store (like Redis) for any shared state.

---
