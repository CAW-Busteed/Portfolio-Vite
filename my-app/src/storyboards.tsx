import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import SBoardPort from 'components/SBoardPort'

const container = document.getElementById('storyboards') as HTMLDivElement
const root = createRoot(container)

root.render(<SBoardPort />)
