import Layout from "../../components/layout";
import Link from "next/link";

export default function Post() {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <h2>
        <Link href="/">Back to Home!</Link>
      </h2>
    </Layout>
  );
}
