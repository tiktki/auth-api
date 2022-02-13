import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Presenter from './Presenter';
import { postLogin } from 'api/login';
import { InputInfo } from 'components/atoms/Input';
import { loadingStateSelector } from 'recoil/selectors/loadingStateSelector';
import { passwordSelector } from 'recoil/selectors/passwordSelector';
import { redirectUrlStateSelector } from 'recoil/selectors/redirectUrlStateSelector';
import { userIdSelector } from 'recoil/selectors/userIdSelector';
import { useState } from 'react';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [userId, setUserId] = useRecoilState<string>(userIdSelector);
  const [password, setPassword] = useRecoilState<string>(passwordSelector);
  const setLoadingState = useSetRecoilState<boolean>(loadingStateSelector);
  const redirectUrl = useRecoilValue<string>(redirectUrlStateSelector);
  const [errMessage, setErrMessage] = useState<string>('');

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

  const doLogin = async () => {
    setLoadingState(true);
    const { code, userInfo } = await postLogin({ userId, password });
    if (userInfo.userId && userInfo.userName && userInfo.role) {
      localStorage.setItem('code', code);
      router.replace(`${redirectUrl}?userInfo=${JSON.stringify(userInfo)}`);
    } else {
      localStorage.removeItem('code');
      setLoadingState(false);
      setErrMessage('ユーザーIDまたはパスワードが違います');
    }
  };

  return (
    <Presenter
      inputInfoList={inputInfoList}
      errMessage={errMessage}
      doLogin={doLogin}
      isLoginDisabled={!userId || !password}
    />
  );
};

export default LoginForm;
