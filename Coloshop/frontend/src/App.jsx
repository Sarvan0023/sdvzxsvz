
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import LatestBlogs from './pages/LatestBlogs'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <Category />
      <Products/>
      <LatestBlogs />
      <Footer />
    </>
  )
}

export default App
