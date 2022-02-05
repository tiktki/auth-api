import { atom } from 'recoil';
import AtomKeys from '../AtomKeys';

export const passwordAtom = atom<string>({
  key: AtomKeys.PASSWORD_STATE,
  default: '',
});
