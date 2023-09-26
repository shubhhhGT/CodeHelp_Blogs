import React, { useContext, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Pagenation from './components/Pagenation';
import { AppContext } from './context/AppContext';

function App() {

  //using data from context
  const {fetchBlogPosts, theme,setTheme, defaultDark} = useContext(AppContext);

  // The blog posts must be fetched after the App component is rendered 
  //using useEffect hook to achieve the same
  //darkmode/lightmode must also be applied after render
  useEffect( () =>{
    fetchBlogPosts();
    if (defaultDark){
      setTheme('dark');
    }
  },[]);


  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col gap-y-2 justify-center items-center bg-bgColor text-textColor' data-theme={theme}>

      {/* Including components that we want to render in App.js */}
      <Header />

      <Posts/>

      <Pagenation/>

    </div>
  );
}

export default App;
