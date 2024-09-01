import { createRoot } from 'react-dom/client'
import App from './App'
import './scss/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient({})
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)
