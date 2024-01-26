import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import ProsePort from 'components/ProsePort'

const container = document.getElementById('prose') as HTMLDivElement
const root = createRoot(container)

root.render(<ProsePort />)
