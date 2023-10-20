import React,{useState, useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';
import Community from './pages/Community';
import { ToastContainer } from 'react-toastify';


const App = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle the mobile menu for the header section.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fetch and store all posts from the backend in the AllPosts state.
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // This useEffect fetches posts when the component mounts and runs only once.
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
     <header className="w-full flex justify-between items-center bg-black  sm:px-8 px-4 py-4 border-b border-b-black">
      {/* This is logo section */}
      <Link to='/'>
        <img src={logo} alt="logo" className='w-28 object-contain' />
      </Link>

      {/* Hide navigation buttons on small devices. */}
      <div className="sm:flex space-x-2 hidden">
        <Link to="/community" className='font-inter font-medium bg-[#ffffff] text-black px-4 py-2 rounded-md'>
          Community
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#9945ff] text-white px-4 py-2 rounded-md'>
          Create an image
        </Link>
      </div>

      <div className="sm:hidden flex items-center">
        {/* toggleMenu button for mobile devices */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none hover:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden absolute top-16 right-0 mt-2 bg-black w-48 rounded-lg shadow-lg z-10">
          <Link to="/community" className='block text-white py-2 px-4 hover:bg-[#333333]'>
            Community
          </Link>
          <Link to="/create-post" className='block text-white py-2 px-4 hover:bg-[#333333]'>
            Create an image
          </Link>
        </div>
      )}
    </header>

      <main >
      <ToastContainer />
        <Routes>
        
           <Route path='/' element={<Home images={allPosts} />} />
           <Route path='/create-post' element={<CreatePost />} />
           <Route path='/community' element={<Community allPosts={allPosts} loading={loading} />} />
        </Routes>
      </main>
   
    </BrowserRouter>
  )
}

export default App
