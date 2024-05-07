import React, {useState} from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark_mode", !isDarkMode);
  };
  return (
    <>
    <Navbar onToggle={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;