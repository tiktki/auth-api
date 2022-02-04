import { useState } from 'react';
import Presenter from './Presenter';
import { InputInfo } from 'components/atoms/Input';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  return <Presenter inputInfoList={inputInfoList} />;
};

export default LoginForm;
