/*
 * @Author: stephenHe
 * @Date: 2021-03-01 20:52:12
 * @LastEditors: stephenHe
 * @LastEditTime: 2021-03-02 16:27:31
 * @Description: 请求方法的封装。 使用hooks的方式。
 * @FilePath: /my-cli-app/src/hooks/useApi.ts
 */

import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'

interface IUseApiProps {
  initialUrl: string;
  initialData: IData;
}

enum Type {
  'FETCH_INIT',
  'FETCH_SUCCESS',
  'FETCH_FAILURE'
}

interface IData {
  [key: string]: string
}


interface IState {
  isLoading: boolean;
  isError: boolean;
  data?: IData;
}

interface IAction {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE';
  payload?: IData;
}

const dataFetchReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return { ...state }
  }

}

export default function useApi({ initialUrl, initialData }: IUseApiProps) {
  const [url, setUrl] = useState<string>(initialUrl)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isError: false,
    isLoading: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url)

        !didCancel && dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        !didCancel && dispatch({ type: 'FETCH_FAILURE' });
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url])


  return [state, setUrl]
}


