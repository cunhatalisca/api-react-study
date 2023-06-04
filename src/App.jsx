
import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
  const { data, fetching, error } = useFetch('https://api.github.com/users/cunhatalisca/repos');

  return (
    <ul>
      { fetching && <p>Carregando...</p> }
      {data.map((repo) => {
        return (
          <li key={repo.id}>
            <strong>{repo.full_name}</strong>
          </li>
        )
      })}
    </ul>
  )
}

export default App
