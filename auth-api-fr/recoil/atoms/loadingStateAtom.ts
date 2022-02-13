import { atom } from 'recoil';
import AtomKeys from '../AtomKeys';

export const loadingStateAtom = atom<boolean>({
  key: AtomKeys.LOADING_STATE,
  default: false,
});
