import { ButtonInfo } from '.';

interface ButtonPresenterInfo extends ButtonInfo {}

const Presenter: React.FC<ButtonPresenterInfo> = ({ props, itemNm }) => {
  return <button {...props}>{itemNm}</button>;
};

export default Presenter;
