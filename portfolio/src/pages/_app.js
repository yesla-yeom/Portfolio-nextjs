import "@/styles/globals.css";
import Layout from "../../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        {/* 실질적인 콘텐츠 들어가는 파일.
        리액트에서 app.js 느낌 */}
      </Layout>
    </>
  );
}
