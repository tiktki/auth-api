import classnames from 'classnames';
import Button from 'components/atoms/Button';
import Input, { InputInfo } from 'components/atoms/Input';

interface LoginFormPresenterInfo {
  inputInfoList: Array<InputInfo>;
}

const Presenter: React.FC<LoginFormPresenterInfo> = ({ inputInfoList }) => {
  return (
    <>
      {inputInfoList.map((info) => (
        <div className='pt-6' key={info.id}>
          <Input className={classnames('max-w-sm', 'mx-auto')} {...info} />
        </div>
      ))}
      <div className={classnames('pt-8')}>
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
              disabled: true,
            }}
            itemNm='ログイン'
          />
        </div>
      </div>
    </>
  );
};

export default Presenter;
