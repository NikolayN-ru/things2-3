import Heading from "../src/components/heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Star from '../src/components/star/star';

const Error = () => {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, [router]);

  return (
    <>
	<Head><title>error</title></Head>
      <Heading tag="h2" text="HHEADING-H2" />
      <p>Error-my-dafaULT</p>
      <Star />
    </>
  );
};
export default Error;
