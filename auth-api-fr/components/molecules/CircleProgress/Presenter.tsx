import Image from 'next/image';
import { CircleProgressInfo } from '.';

interface CircleProgressPresenterInfo extends CircleProgressInfo {}

const Presenter: React.FC<CircleProgressPresenterInfo> = ({ className }) => {
  return (
    <div className={className}>
      <div className={'m-auto'}>
        <Image
          src={'/images/loading.gif'}
          layout='fixed'
          width={48}
          height={48}
          priority={true}
          alt='loading'
        />
      </div>
    </div>
  );
};

export default Presenter;
