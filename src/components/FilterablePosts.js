"use client";

import { useState } from "react";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
