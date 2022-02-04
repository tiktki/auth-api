import classnames from 'classnames';

const Presenter: React.FC = () => {
  return (
    <div className='pb-2'>
      <img
        className={classnames('block', 'w-3/4', 'm-auto')}
        src='/images/auth-api-logo.svg'
        alt='auth-api-logo'
      />
    </div>
  );
};

export default Presenter;
