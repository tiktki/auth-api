import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';
import LoginLeft from 'components/organisms/LoginLeft';
import LoginRight from 'components/organisms/LoginRight';

const Login: NextPage = () => {
  return (
    <div className={classnames('h-screen', 'm-0', 'bg-white', 'font-mono')}>
      <Head>
        <title>ログイン</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classnames('w-full', 'h-full')}>
        <LoginLeft />
        <LoginRight />
      </main>
    </div>
  );
};

export default Login;
