import classnames from 'classnames';
import { NextPage } from 'next';
import CircleProgress from 'components/molecules/CircleProgress';
import useInit from 'hooks/useInit';

const Init: NextPage = () => {
  useInit();

  return (
    <CircleProgress
      className={classnames(
        'w-full',
        'h-full',
        'flex',
        'flex-col',
        'absolute',
        'z-10',
        'bg-gray-100',
        'bg-opacity-50'
      )}
    />
  );
};

export default Init;
