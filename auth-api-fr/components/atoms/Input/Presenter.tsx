import classnames from 'classnames';
import { InputInfo } from '.';

interface InputPresenterInfo extends InputInfo {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Presenter: React.FC<InputPresenterInfo> = ({
  id,
  type,
  itemNm,
  value,
  setValue,
  isFocus,
  setIsFocus,
  isRequired,
  className,
}) => {
  return (
    <div className={classnames(className, 'relative')}>
      <input
        id={id}
        type={type}
        autoComplete='off'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={classnames(
          'w-full',
          'h-12',
          'px-4',
          'border',
          'rounded',
          'text-gray-500',
          'focus:border-gray-700',
          'focus:outline-none'
        )}
      />
      <label
        htmlFor={id}
        className={classnames(
          'absolute',
          'left-2',
          'bg-white',
          'px-1',
          'transform',
          '-translate-y-1/2',
          'duration-300',
          !value && !isFocus
            ? ['top-1/2', 'text-sm', 'text-gray-300'].join(' ')
            : ['top-0', 'text-xs', 'text-gray-700'].join(' ')
        )}
      >
        {itemNm}
        {isRequired && (
          <span className={!value && !isFocus ? '' : 'text-red-600'}> *</span>
        )}
      </label>
    </div>
  );
};

export default Presenter;
