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

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const Posts = async () => {
  const res = await fetch(`${apiUrl}/api/posts`);
  if (!res.ok) return <p>データを取得できませんでした。</p>;
  const {
    data: { articles },
  }: { data: { articles: Article[] } } = await res.json();

  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <a
            href={`https://zenn.dev${article.path}`}
            target="_blank"
            className="text-zinc-400 underline"
          >
            {article.title}
          </a>
        </div>
      ))}
    </>
  );
};
