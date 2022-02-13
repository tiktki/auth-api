import { selector } from 'recoil';
import SelectorKeys from '../SelectorKeys';
import { loadingStateAtom } from 'recoil/atoms/loadingStateAtom';

export const loadingStateSelector = selector<boolean>({
  key: SelectorKeys.LOADING_SELECTOR,
  get: ({ get }) => {
    return get(loadingStateAtom);
  },
  set: ({ set }, newValue) => {
    set(loadingStateAtom, newValue);
  },
});
