import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Wallet from './components/wallet';
import Home from './components/home';
import Members from './components/members';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Wallet/>},
    {path:'/home', element:<Home/>},
    {path:'/members', element:<Members/>}
  ])

  return (
    <>
     <RouterProvider router={router}/>
     <p>hello</p>
    </>
  )
}

export default App
