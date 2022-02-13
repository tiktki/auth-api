import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';
import LoginLeft from 'components/organisms/LoginLeft';
import LoginRight from 'components/organisms/LoginRight';

interface LoginPageInfo {
  bgImageUrl: string;
}

const Login: NextPage<LoginPageInfo> = ({ bgImageUrl }) => {
  return (
    <div className={classnames('h-screen', 'm-0', 'bg-white', 'font-mono')}>
      <Head>
        <title>ログイン</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classnames('w-full', 'h-full')}>
        <LoginLeft />
        <LoginRight bgImageUrl={bgImageUrl} />
      </main>
    </div>
  );
};

export const getServerSideProps = () => {
  const bgImageUrl = `/images/login_bg_${
    Math.floor(Math.random() * 10) + 1
  }.jpg`;

  return { props: { bgImageUrl } };
};

export default Login;
