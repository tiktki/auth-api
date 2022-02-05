import Image from 'next/image';
import classnames from 'classnames';

interface LoginRightPresenterInfo {
  bgImageUrl: string;
}

const Presenter: React.FC<LoginRightPresenterInfo> = ({ bgImageUrl }) => {
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
        src={bgImageUrl}
        layout='fill'
        priority={true}
        objectFit='cover'
        alt='auth-api-bg'
      />
    </div>
  );
};

export default Presenter;
