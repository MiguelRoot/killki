if (typeof globalThis === "undefined") {
  var globalThis = (function () {
    return this || (0, eval)("this");
  })();
}
