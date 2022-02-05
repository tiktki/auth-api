import { atom } from 'recoil';
import AtomKeys from '../AtomKeys';

export const userIdAtom = atom<string>({
  key: AtomKeys.USER_ID_STATE,
  default: '',
});
