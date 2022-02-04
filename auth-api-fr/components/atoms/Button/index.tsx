import Presenter from './Presenter';

export interface ButtonInfo {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  itemNm: string;
}

const Button: React.FC<ButtonInfo> = (props) => {
  return <Presenter {...props} />;
};

export default Button;
