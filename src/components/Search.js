import React from 'react'
import axios from 'axios'

export default function Search() {

  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then(res => {
  //   console.log(res.data);
  // })

  axios.get('https://jsonplaceholder.typicode.com/albumsasfdf')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  })

  // axios.post('https://jsonplaceholder.typicode.com/posts', {
  //   title: 'Hello World',
  //   body: 'This is a new post',
  //   userId: 1
  //   })
  // .then(res => {
  //   console.log(res.data)});

  return (
    <div>Search</div>
  )
}
