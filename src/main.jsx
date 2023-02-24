import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/Filters'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
