import { useRouter } from 'next/router';
import en from 'locales/en';
import ja from 'locales/ja';
import ko from 'locales/ko';
import zh from 'locales/zh';

export interface TranslateLocale {
  userId: string;
  password: string;
  login: string;
  authError: string;
}

const getTranslation = (locale: string | undefined): TranslateLocale => {
  switch (locale) {
    case 'en':
      return en;
    case 'ko':
      return ko;
    case 'zh':
      return zh;
    default:
      return ja;
  }
};

const useLocale = () => {
  const { locale } = useRouter();
  const t = getTranslation(locale);
  return { locale, t };
};

export default useLocale;
