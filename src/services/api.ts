import axios from 'axios'

const getCharacterByText = async (value: string) => {

  const response = await axios.get(
    `https://swapi.dev/api/people/?search=${value}`,
  )

  if (response.status === 200) {
    return response.data
  }
  return []
}

const getMovieName = async (url: string) => {
  
  const response = await axios.get(url)
  if (response.status === 200) {
    return response.data.title
  }

  return false
}

export { getCharacterByText, getMovieName }
