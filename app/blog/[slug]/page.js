export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  return <h1>Reading post: {slug}</h1>;
}
