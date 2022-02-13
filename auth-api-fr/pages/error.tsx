import { NextPage } from 'next';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Error: NextPage = () => {
  const router = useRouter();
  const code = router.query.code;
  let title = router.query.title;

  if (Array.isArray(title)) {
    title = title.join();
  }

  return (
    <>
      <Head>
        <title>{`${code}エラー`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DefaultErrorPage statusCode={Number(code)} title={title} />
    </>
  );
};

export default Error;
