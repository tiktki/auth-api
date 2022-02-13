import { useRecoilValue } from 'recoil';
import { loadingStateSelector } from 'recoil/selectors/loadingStateSelector';
import Presenter from './Presenter';

const LoginLeft: React.FC = () => {
  const loadingState = useRecoilValue<boolean>(loadingStateSelector);

  return <Presenter isLoading={loadingState} />;
};

export default LoginLeft;
