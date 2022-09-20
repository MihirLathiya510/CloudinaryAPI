import { v2 as cloud } from "cloudinary";
import { config } from "./config.js";

cloud.config({
  cloud_name: config.PROD.name,
  api_key: config.PROD.key,
  api_secret: config.PROD.secret,
  secure: true,
});
const prodTags = [];
async function getTags(cursor = "") {
  const { tags, next_cursor } = await cloud.api.tags({
    max_results: 500,
    next_cursor: cursor,
  });
  prodTags.push(...tags);
  console.log(prodTags.length, "data fetched..");
  if (next_cursor) {
    await getTags(next_cursor);
  }
}
await getTags();

cloud.config({
  cloud_name: config.DEV.name,
  api_key: config.DEV.key,
  api_secret: config.DEV.secret,
  secure: true,
});
const images = [
  "test/tags-test-1",
  "test/tags-test-2",
  "test/tags-test-3",
  "test/tags-test-4",
  "test/tags-test-5",
  "test/tags-test-6",
  "test/tags-test-7",
  "test/tags-test-8",
  "test/tags-test-9",
  "test/tags-test-10",
  "test/tags-test-11",
];

const spliceCount = Math.ceil(prodTags.length / images.length);
console.log(spliceCount);
for (let i = 0; i < images.length; i++) {
  const tags = prodTags.splice(0, spliceCount);
  console.log("updating tags for", images[i], tags.length);
  await cloud.api.update(images[i], { tags });
}
