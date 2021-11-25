import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <section className="container">
      <div className="fourofour">
        <h1>Oooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the{" "}
          <Link href='/'>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default NotFound;
