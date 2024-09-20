
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/Home';
import SendEmailPage from './pages/SendEmail/SendEmail';


const routers = createBrowserRouter(
	[
	  { path: "/", element: <HomePage /> },
    { path: "/sendemail", element: <SendEmailPage /> },
	]
);


function App() {
  
  return (
    <RouterProvider router={routers} />
  )
}

export default App
