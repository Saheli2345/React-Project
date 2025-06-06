import logo from './logo.svg';
import './App.css';
import Head from './Components/Head';
import MainContainer from './Components/MainContainer';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Shimmer from './Components/Shimmer';
import InnerContainer from './Components/InnerContainer';

function App() {
  const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <MainContainer/>,
    children:[
    {
    path: "/",
    element: <InnerContainer/>
   },
   {
    path:"/history",
    element:<h1>This is HistoryPage</h1>
    },
    {
      path:"/watch",
      element: <h1>This is Watch page</h1>
    },
  ] },
  {
    path:"/demo",
    element:<h1>This is demo page</h1>
  },
]);
  return (
   <div>
    <Head/>
    <RouterProvider router={appRouter}/>
   </div>
  );   
}

export default App;
