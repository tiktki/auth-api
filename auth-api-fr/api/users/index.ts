import Router from 'next/router';
import axios, { AxiosRequestConfig } from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`;

export interface GetUserRequest {
  code: string;
}

interface UserInfo {
  userId: string;
  userName: string;
  role: string;
}

interface GetUserResponse {
  code: string;
  userInfo: UserInfo;
}

/**
 * ユーザ情報取得API呼出
 * @param req ユーザ情報取得リクエスト
 * @returns ユーザ情報
 */
export const getUsers = async (
  req: GetUserRequest
): Promise<GetUserResponse> => {
  const url = `${URL}/${req.code}`;
  const options: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const { data } = await axios.get<GetUserResponse>(url, options);
    return data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status !== 404) {
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
