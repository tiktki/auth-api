import classnames from 'classnames';
import Button from 'components/atoms/Button';
import Input, { InputInfo } from 'components/atoms/Input';
import { TranslateLocale } from 'hooks/useLocale';

interface LoginFormPresenterInfo {
  t: TranslateLocale;
  inputInfoList: Array<InputInfo>;
  errMessage: string;
  doLogin: () => void;
  isLoginDisabled: boolean;
}

const Presenter: React.FC<LoginFormPresenterInfo> = ({
  t,
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
        className={classnames('py-4', 'text-center', 'text-red-500', 'text-sm')}
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
                'inline-flex',
                'justify-center',
                'items-center',
                'disabled:opacity-30'
              ),
              onClick: doLogin,
              disabled: isLoginDisabled,
            }}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current w-5 h-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d={
                    isLoginDisabled
                      ? 'M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      : 'M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z'
                  }
                  clipRule='evenodd'
                />
              </svg>
            }
            itemNm={t.login}
          />
        </div>
      </div>
    </>
  );
};

export default Presenter;
