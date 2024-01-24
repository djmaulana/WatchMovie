import './App.css';
import Footer from './components/Footer';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Stats from './components/Stats';
import Top from './components/Top';

function App() {
  return (
    <div className='bg-[#282c34] min-h-[100vh]'>
      <Navbar />
      <div className='mx-24 mt-5'>
        <h1 className='text-2xl font-semibold text-white'>Now Playing!</h1>
        <Movie />
        <hr className='border-gray-300'/>
        <Popular/>
        <hr className='border-gray-300'/>
        <Top />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

export default App;
