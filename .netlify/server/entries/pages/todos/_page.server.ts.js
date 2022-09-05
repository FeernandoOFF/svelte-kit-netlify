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
  DELETE: () => DELETE,
  PATCH: () => PATCH,
  POST: () => POST,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index2 = require("../../../chunks/index2.js");
const base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
const load = async ({ locals }) => {
  const response = await api("GET", `todos/${locals.userid}`);
  if (response.status === 404) {
    return {
      todos: []
    };
  }
  if (response.status === 200) {
    return {
      todos: await response.json()
    };
  }
  throw (0, import_index2.e)(response.status);
};
const POST = async ({ request, locals }) => {
  const form = await request.formData();
  await api("POST", `todos/${locals.userid}`, {
    text: form.get("text")
  });
};
const PATCH = async ({ request, locals }) => {
  const form = await request.formData();
  await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : void 0,
    done: form.has("done") ? !!form.get("done") : void 0
  });
};
const DELETE = async ({ request, locals }) => {
  const form = await request.formData();
  await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);
};
