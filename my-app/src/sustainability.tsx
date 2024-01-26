import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import SustainPort from 'components/SustainPort'

const container = document.getElementById('sustainability') as HTMLDivElement
const root = createRoot(container)

root.render(<SustainPort />)
