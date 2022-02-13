import classnames from 'classnames';
import Button from 'components/atoms/Button';
import Input, { InputInfo } from 'components/atoms/Input';

interface LoginFormPresenterInfo {
  inputInfoList: Array<InputInfo>;
  errMessage: string;
  doLogin: () => void;
  isLoginDisabled: boolean;
}

const Presenter: React.FC<LoginFormPresenterInfo> = ({
  inputInfoList,
  errMessage,
  doLogin,
  isLoginDisabled,
}) => {
  return (
    <>
      {inputInfoList.map((info) => (
        <div className='pt-6' key={info.id}>
          <Input className={classnames('max-w-sm', 'mx-auto')} {...info} />
        </div>
      ))}
      <p
        className={classnames('py-4', 'text-center', 'text-red-500', 'text-xs')}
      >
        {errMessage}
      </p>
      <div>
        <div className={classnames('max-w-sm', 'mx-auto')}>
          <Button
            props={{
              className: classnames(
                'w-full',
                'h-12',
                'rounded',
                'bg-gray-700',
                'text-white',
                'text-lg',
                'font-bold',
                'disabled:opacity-30'
              ),
              onClick: doLogin,
              disabled: isLoginDisabled,
            }}
            itemNm='ログイン'
          />
        </div>
      </div>
    </>
  );
};

export default Presenter;
