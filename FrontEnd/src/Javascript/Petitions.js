import axios from 'axios'

export const persona = {}
axios({
  method: 'get',
  url: 'http://localhost:3000/index'
})
  .then((Response) => Response.data)
  .then((data) => console.log(data))
