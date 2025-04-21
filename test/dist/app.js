"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("sdk");
const sdk = new sdk_1.default({ apiKey: "123" });
sdk.getPosts().then((posts) => console.log(posts));
