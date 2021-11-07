import React, { useState, useEffect } from 'react';


function App() {
  // const [resourceType, setResourceType] = useState('posts')
  // const [items, setItem] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // console.log('render')

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [windowWidth])
  // useEffect(() => {
  //   console.log('onMount')
  // }, [])
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(respense => respense.json())
  //     .then(json => setItem(json))
  // }, [resourceType])

  return (
    <>
      <h1>{windowWidth}</h1>


      {/* <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
    </>
  )
}

export default App;
