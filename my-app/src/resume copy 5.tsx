import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Resume from 'components/Resume'

const container = document.getElementById('resume') as HTMLDivElement
const root = createRoot(container)

root.render(<Resume />)
