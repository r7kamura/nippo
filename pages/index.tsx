import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <section>
      <p>
        <a href="https://twitter.com/r7kamura">r7kamura</a>'s daily working log.
      </p>
      <ol>
        {issues.map((issue) => (
          <li key={issue.number}>
            <Link href={`/articles/${issue.number}`}>{issue.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      issues: await listIssues(),
    },
  };
}
