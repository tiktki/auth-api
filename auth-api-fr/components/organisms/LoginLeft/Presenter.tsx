import classnames from 'classnames';
import LoginForm from 'components/molecules/LoginForm';
import LoginTitle from 'components/molecules/LoginTitle';

const Presenter: React.FC = () => {
  return (
    <div
      className={classnames('w-full', 'md:w-1/2', 'h-full', 'flex', 'flex-col')}
    >
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
