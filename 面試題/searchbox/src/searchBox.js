import { useEffect, useState } from "react"
import axios from 'axios'

export default function SearchBox(query, page, hitsPerPage) {
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(false)
 const [News, setNews] = useState([])
 const [hasMore, setHasMore] = useState(false)

 useEffect(() => {
  setNews([])
 }, [query])

 useEffect(() => {
  let cancel
  axios({
   method: 'GET',
   url: 'http://hn.algolia.com/api/v1/search',
   params: { query: query, page: page, hitsPerPage: hitsPerPage },
   cancelToken: new axios.CancelToken(c => cancel = c)
  }).then(res => {
   setNews(prevNews => {
    return [...new Set([...prevNews, ...res.data.hits])]
   })
   setHasMore(res.data.nbpage > 0)
   setLoading(false)
  }).catch(e => {
   if (axios.isCancel(e)) return
   setError(true)
  })
  return () => cancel()
 }, [query, page, hitsPerPage])
 return { loading, error, News, hasMore }
}