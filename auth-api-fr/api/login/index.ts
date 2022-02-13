import Router from 'next/router';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`;

export interface PostLoginRequest {
  userId: string;
  password: string;
}

interface UserInfo {
  userId: string;
  userName: string;
  role: string;
}

interface PostLoginResponse {
  code: string;
  userInfo: UserInfo;
}

/**
 * ログインAPI呼出
 * @param req ログインリクエスト
 * @returns ユーザ情報
 */
export const postLogin = async (
  req: PostLoginRequest
): Promise<PostLoginResponse> => {
  const param = new URLSearchParams();
  param.append('userId', req.userId);
  param.append('password', req.password);
  try {
    const { data } = await axios.post<PostLoginResponse>(URL, param);
    return data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status !== 401) {
        Router.push({
          pathname: '/error',
          query: {
            code: error.response.status,
          },
        });
      }
    } else {
      Router.push({
        pathname: '/error',
        query: {
          title: error.message,
        },
      });
    }
    return { code: '', userInfo: { userId: '', userName: '', role: '' } };
  }
};
