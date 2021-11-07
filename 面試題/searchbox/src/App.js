import React, { useEffect, useState } from 'react'
import { Wrapper, Title, Input, Button, Table, TD, TH, TR, Tbody } from "./style"
import { useHackerNewsApi } from './useHackerNewsApi'

function App() {
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch, doRemove] = useHackerNewsApi()

  return (
    <Wrapper>
      <Title>
        Hacker News Rest API
      </Title>
      <Input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <Button type="button" onClick={() => doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)} position="start" >Search</Button>

      {isError && (<div>Error ...</div>)}

      {isLoading ? (
        <div>Loading ...</div>)
        : (
          <ul>
            {data.hits.map(item => (
              <>
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                  <button onClick={(e) => doRemove(e)}>remove</button>
                </li>
              </>
            ))}
          </ul>
        )
      }
      <Table>
        <thead>
          <TR color='blue'>
            <TH color='blue' width='10%'>ID</TH>
            <TH width='10%'>author</TH>
            <TH color='blue' width='10%'>Comment</TH>
            <TH width='30%'>title</TH>
            <TH color='blue' width='35%'>url</TH>
            <TH width='5%'>remove</TH>
          </TR>
        </thead>
        <Tbody>
          {/* {Posts.map(res => {
            return <TR color='white' key={res.objectID}>
              <TD>{res.objectID}</TD>
              <TD>{res.author}</TD>
              <TD>{res.num_comments}</TD>
              <TD>{res.title}</TD>
              <TD>{res.url}</TD>
              <TD><Button position="start" onClick={e => DeleteNew(res.objectID)}>Delete</Button></TD>
            </TR>
          })} */}
        </Tbody>
      </Table>

      {/* <div>{loading && "loading..."}</div>
      <div>{Error && "error..."}</div> */}

      {/* <Button position="center" onClick={e => hasMoreNews(Posts)}>Load more</Button> */}

    </Wrapper>
  );
}

export default App;
