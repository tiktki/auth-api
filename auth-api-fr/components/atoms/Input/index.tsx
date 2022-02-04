import { useState } from 'react';
import Presenter from './Presenter';

export interface InputInfo extends React.InputHTMLAttributes<HTMLInputElement> {
  itemNm: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isRequired: boolean;
}

const Input: React.FC<InputInfo> = (inputInfo) => {
  const [isFocus, setIsFocus] = useState(false);

  return <Presenter {...inputInfo} isFocus={isFocus} setIsFocus={setIsFocus} />;
};

export default Input;
