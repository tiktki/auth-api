import { selector } from 'recoil';
import SelectorKeys from '../SelectorKeys';
import { userIdAtom } from 'recoil/atoms/userIdAtom';

export const userIdSelector = selector<string>({
  key: SelectorKeys.USER_ID_SELECTOR,
  get: ({ get }) => {
    return get(userIdAtom);
  },
  set: ({ set }, newValue) => {
    set(userIdAtom, newValue);
  },
});
