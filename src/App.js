import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components'; 
import { PersistGate } from 'redux-persist/integration/react'
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './globalStyle';
import Home from './pages/Home';
import { store, persistor } from './store';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState(true)

  useEffect(() =>{
    const localTheme = JSON.parse(localStorage.getItem('theme'))

    setTheme(localTheme)
  }, []) 

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='App'>
            <ThemeProvider theme={theme ? lightTheme : darkTheme}>
              <ToastContainer autoClose={3000}/>
                <GlobalStyle/> 
                <Routes>
                  <Route path='/' element={<Home setTheme={setTheme} theme={theme}/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/login' element={<Login/>}/>
                </Routes>
            </ThemeProvider>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
