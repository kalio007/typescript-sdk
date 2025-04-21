const Typicode = require("@kalio007/typescript-sdk");

const client = new Typicode({ apiKey: "test_key" });


client.getPosts().then((p) => {
  console.log(p);
});

// sdk.getPostById(1).then((post) => console.log(post));

// sdk
//   .createPost({ title: "foo", body: "bar", userId: 1 })
//   .then((post) => console.log(post));
