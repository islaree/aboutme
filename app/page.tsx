"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

type Article = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  bookmarked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: null;
  pinned: boolean;
  path: string;
  user: User;
  publication: null;
};

export default function Home() {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch("/api/blog");
      if (!res.ok) return;
      const { data } = await res.json();
      setPosts(data.articles);
    };
    getPost();
  }, []);

  return (
    <div>
      <p>👋Hi, I&apos;m islaree.</p>
      <div>
        <h2>## bio</h2>
        <ul>
          <li>
            <h3>20xx: example.inc</h3>
            <p>bio text</p>
          </li>
          <li>
            <h3>20xx: example.inc</h3>
            <p>bio text</p>
          </li>
        </ul>
      </div>
      <h2>## blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href={`https://zenn.dev${post.path}`}
              target="_blank"
              className="underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
