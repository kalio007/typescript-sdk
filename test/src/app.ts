const Typicode = require("sdk");

const sdk = new Typicode({ apiKey: "123" });
// sdk.getPosts().then((posts) => console.log(posts));

// sdk.getPostById(1).then((post) => console.log(post));

sdk
  .createPost({ title: "foo", body: "bar", userId: 1 })
  .then((post) => console.log(post));
