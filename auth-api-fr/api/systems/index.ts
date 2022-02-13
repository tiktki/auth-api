import Router from 'next/router';
import axios, { AxiosRequestConfig } from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/systems`;

export interface GetSytemRequest {
  systemCd: string;
}

interface GetSytemResponse {
  url: string;
}

/**
 * システム情報取得API呼出
 * @param req システム情報取得リクエスト
 * @returns システム情報
 */
export const getSystems = async (
  req: GetSytemRequest
): Promise<GetSytemResponse> => {
  const url = `${URL}/${req.systemCd}`;
  const options: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const { data } = await axios.get<GetSytemResponse>(url, options);
    return data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Router.push({
            pathname: '/error',
            query: {
              code: error.response.status,
              title: 'system is not exist',
            },
          });
          break;
        default:
          Router.push({
            pathname: '/error',
            query: {
              code: error.response.status,
            },
          });
          break;
      }
    } else {
      Router.push({
        pathname: '/error',
        query: {
          title: error.message,
        },
      });
    }
    return { url: '' };
  }
};
