const Typicode = require("@kalio007/typescript-sdk");
const client = new Typicode({ apiKey: "test_key" });
client.getPosts().then((p) => {
    console.log(p);
});
