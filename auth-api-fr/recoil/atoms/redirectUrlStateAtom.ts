import { atom } from 'recoil';
import AtomKeys from '../AtomKeys';

export const redirectUrlStateAtom = atom<string>({
  key: AtomKeys.REDIRECT_URL_STATE,
  default: '',
});
