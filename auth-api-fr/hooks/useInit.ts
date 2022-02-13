import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { getSystems } from 'api/systems';
import { getUsers } from 'api/users';
import { redirectUrlStateSelector } from 'recoil/selectors/redirectUrlStateSelector';

const useInit = () => {
  const router = useRouter();
  const setRedirectUrlState = useSetRecoilState<string>(
    redirectUrlStateSelector
  );

  const init = async () => {
    const systemCd = router.query.systemCd
      ? router.query.systemCd.toString()
      : '';
    const { url } = await getSystems({ systemCd });
    if (url) {
      setRedirectUrlState(url);
      const code = localStorage.getItem('code');
      if (code) {
        const { code: newCode, userInfo } = await getUsers({ code });
        if (userInfo.userId && userInfo.userName && userInfo.role) {
          localStorage.setItem('code', newCode);
          router.replace(`${url}?userInfo=${JSON.stringify(userInfo)}`);
        } else {
          localStorage.removeItem('code');
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    }
  };

  useEffect(() => {
    router.isReady && init();
  }, [router.isReady]);
};

export default useInit;
