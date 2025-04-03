import { useEffect, useState } from "react"


export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true)
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch(() => {
      setError(true)
      throw new Error('Error to fetch data')
    })
    .finally(() => {
      setError(false)
      setLoading(false)
    })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return { data, error, loading }
}