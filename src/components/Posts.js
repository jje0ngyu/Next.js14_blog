import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function Posts(){

  const posts = await getAllPosts();

  return (
    <section>
      <PostsGrid posts={posts} />
    </section>
  );
}