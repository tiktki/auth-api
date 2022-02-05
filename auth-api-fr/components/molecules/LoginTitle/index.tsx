import { useSetRecoilState } from 'recoil';
import Presenter from './Presenter';
import { userIdSelector } from 'recoil/selectors/userIdSelector';
import { passwordSelector } from 'recoil/selectors/passwordSelector';

const LoginTitle: React.FC = () => {
  const setUserId = useSetRecoilState<string>(userIdSelector);
  const setPassword = useSetRecoilState<string>(passwordSelector);

  const onLogoClick = () => {
    setUserId('999999');
    setPassword('admin');
  };

  return (
    <>
      {process.env.NODE_ENV === 'development' ? (
        <Presenter onLogoClick={onLogoClick} />
      ) : (
        <Presenter />
      )}
    </>
  );
};

export default LoginTitle;
