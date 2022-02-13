import { selector } from 'recoil';
import SelectorKeys from '../SelectorKeys';
import { redirectUrlStateAtom } from 'recoil/atoms/redirectUrlStateAtom';

export const redirectUrlStateSelector = selector<string>({
  key: SelectorKeys.REDIRECT_URL_SELECTOR,
  get: ({ get }) => {
    return get(redirectUrlStateAtom);
  },
  set: ({ set }, newValue) => {
    set(redirectUrlStateAtom, newValue);
  },
});
