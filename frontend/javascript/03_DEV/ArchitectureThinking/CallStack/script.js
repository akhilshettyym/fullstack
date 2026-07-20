/* 
Call Stack (Execution Stack) :
A call stack, also known as an execution stack, is a data structure used by the JavaScript interpreter (or runtime environment) to manage function invocation (function calls) [1]. It operates on a LIFO (Last-In, First-Out) principle, meaning the most recently added function is the first one to be removed when it finishes executing
*/

function a() {
    console.log("a");
}

function b() {
    console.log("b");
    a();
}

function c() {
    b();
    console.log("c");
}

c();