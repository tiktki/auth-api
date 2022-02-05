import { useRecoilState } from 'recoil';
import Presenter from './Presenter';
import { InputInfo } from 'components/atoms/Input';
import { userIdSelector } from 'recoil/selectors/userIdSelector';
import { passwordSelector } from 'recoil/selectors/passwordSelector';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useRecoilState<string>(userIdSelector);
  const [password, setPassword] = useRecoilState<string>(passwordSelector);

  const inputInfoList: Array<InputInfo> = [
    {
      id: 'userid',
      type: 'text',
      itemNm: 'ユーザID',
      value: userId,
      setValue: setUserId,
      isRequired: true,
    },
    {
      id: 'password',
      type: 'password',
      itemNm: 'パスワード',
      value: password,
      setValue: setPassword,
      isRequired: true,
    },
  ];

  return (
    <Presenter
      inputInfoList={inputInfoList}
      isLoginDisabled={!userId || !password}
    />
  );
};

export default LoginForm;
