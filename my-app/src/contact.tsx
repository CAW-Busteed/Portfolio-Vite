import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Contact from 'components/Contact'

const container = document.getElementById('contact') as HTMLDivElement
const root = createRoot(container)

root.render(<Contact />)
