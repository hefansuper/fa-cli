/*
 * @Author: stephenHe
 * @Date: 2021-03-01 20:52:12
 * @LastEditors: stephenHe
 * @LastEditTime: 2021-03-01 21:06:31
 * @Description: 请求方法的封装。 使用hooks的方式。
 * @FilePath: /my-cli-app/src/hooks/useApi.ts
 */

import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function useApi(initialUrl: string) {
  const [url, setUrl] = useState<string>(initialUrl)
  const [data, setData] = useState<Object>({})
  const [isError, seIsError] = useState<boolean>(false)
  const [isLoading, seIsLoading] = useState<boolean>(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const result = await axios(url)
        setData(result)
      } catch (error) {
        seIsError(true)
      } finally {
        seIsLoading(false)
      }
    }

    fetchData()
  }, [url])


  return [{ data, isError, isLoading }, setUrl]
}


