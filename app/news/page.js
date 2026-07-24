export default async function NewsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();
  return <h1>Live News: {post.title}</h1>;
}
