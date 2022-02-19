import Image from 'next/image';
import classnames from 'classnames';

const Presenter: React.FC = () => {
  return (
    <div
      className={classnames(
        'w-1/2',
        'h-full',
        'shadow-2xl',
        'relative',
        '-top-full',
        'left-1/2',
        'hidden',
        'md:block'
      )}
    >
      <Image
        src={'/images/login_bg.jpg'}
        layout='fill'
        priority={true}
        objectFit='cover'
        alt='auth-api-bg'
      />
    </div>
  );
};

export default Presenter;
