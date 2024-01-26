import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import ProgPort from 'components/ProgPort'

const container = document.getElementById('programs') as HTMLDivElement
const root = createRoot(container)

root.render(<ProgPort />)
