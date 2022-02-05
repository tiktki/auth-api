import { selector } from 'recoil';
import SelectorKeys from '../SelectorKeys';
import { passwordAtom } from 'recoil/atoms/passwordAtom';

export const passwordSelector = selector<string>({
  key: SelectorKeys.PASSWORD_SELECTOR,
  get: ({ get }) => {
    return get(passwordAtom);
  },
  set: ({ set }, newValue) => {
    set(passwordAtom, newValue);
  },
});
