import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  // 아래 json 파일 가져온 거 콘솔로 확인

  return (
    <>
      <h1>Welcome to My portfolio</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
