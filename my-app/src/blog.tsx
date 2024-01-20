import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Blog from 'components/Blog'

const container = document.getElementById('blog') as HTMLDivElement
const root = createRoot(container)

root.render(<Blog />)
