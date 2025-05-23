import Header from './components/Header'
import Profile from './components/Profile'
import Pasts from './components/Pasts'
import Contact from './components/Contact'
import './assets/Header.css'
import './assets/Profile.css'
import './assets/Pasts.css'
import './assets/Contact.css'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-gray-800 max-w-3xl mx-auto p-6">
      <Header />
      <Profile />
      <Pasts />
      <Contact />
      <Footer />
    </div>
  )
}
