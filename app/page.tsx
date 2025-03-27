import { Suspense } from "react";
import { Posts } from "./components/posts";

export default function Home() {
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
      <Suspense fallback={<p>...loading</p>}>
        <Posts />
      </Suspense>
    </div>
  );
}
