import Presenter from './Presenter';

interface LoginRightInfo {
  bgImageUrl: string;
}

const LoginRight: React.FC<LoginRightInfo> = ({ bgImageUrl }) => {
  return <Presenter bgImageUrl={bgImageUrl} />;
};

export default LoginRight;
