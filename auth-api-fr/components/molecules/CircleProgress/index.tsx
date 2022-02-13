import Presenter from './Presenter';

export interface CircleProgressInfo {
  className: string;
}

const CircleProgress: React.FC<CircleProgressInfo> = ({ className }) => {
  return <Presenter className={className} />;
};

export default CircleProgress;
