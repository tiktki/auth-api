import { ButtonInfo } from '.';

interface ButtonPresenterInfo extends ButtonInfo {}

const Presenter: React.FC<ButtonPresenterInfo> = ({ props, icon, itemNm }) => {
  return (
    <button {...props}>
      {icon}
      <span>{itemNm}</span>
    </button>
  );
};

export default Presenter;
