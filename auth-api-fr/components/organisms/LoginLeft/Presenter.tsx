import classnames from 'classnames';
import CircleProgress from 'components/molecules/CircleProgress';
import LoginForm from 'components/molecules/LoginForm';
import LoginTitle from 'components/molecules/LoginTitle';

interface LoginLeftPresenterInfo {
  isLoading: boolean;
}

const Presenter: React.FC<LoginLeftPresenterInfo> = ({ isLoading }) => {
  return (
    <div
      className={classnames('w-full', 'md:w-1/2', 'h-full', 'flex', 'flex-col')}
    >
      {isLoading && (
        <CircleProgress
          className={classnames(
            'w-full',
            'md:w-1/2',
            'h-full',
            'flex',
            'flex-col',
            'absolute',
            'z-10',
            'bg-gray-100',
            'bg-opacity-50'
          )}
        />
      )}
      <div
        className={classnames(
          'flex',
          'flex-col',
          'justify-center',
          'md:justify-start',
          'my-auto',
          'mx-8',
          'md:mx-24',
          'lg:mx-32'
        )}
      >
        <LoginTitle />
        <LoginForm />
      </div>
    </div>
  );
};

export default Presenter;
