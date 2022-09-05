var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  H: () => HttpError,
  R: () => Redirect,
  e: () => error,
  j: () => json
});
module.exports = __toCommonJS(stdin_exports);
class HttpError {
  name = "HttpError";
  stack = void 0;
  constructor(status, message) {
    this.status = status;
    this.message = message != null ? message : `Error: ${status}`;
  }
  toString() {
    return this.message;
  }
}
class Redirect {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init) {
  const headers = new Headers(init == null ? void 0 : init.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init,
    headers
  });
}
