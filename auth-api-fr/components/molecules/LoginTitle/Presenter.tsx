import classnames from 'classnames';

interface LoginTitlePresenterInfo {
  onLogoClick?: () => void;
}

const Presenter: React.FC<LoginTitlePresenterInfo> = ({ onLogoClick }) => {
  return (
    <div className='pb-2' onClick={onLogoClick}>
      <img
        className={classnames('block', 'w-3/4', 'm-auto')}
        src='/images/auth-api-logo.svg'
        alt='auth-api-logo'
      />
    </div>
  );
};

export default Presenter;
