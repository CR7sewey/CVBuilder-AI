import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { ResumeProvider } from '../context/Context.tsx'
import { ToastContainer } from 'react-toastify'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ResumeProvider>
        <ToastContainer position="top-center" />
        <App />
      </ResumeProvider>
    </ClerkProvider>
  </StrictMode>,
)
