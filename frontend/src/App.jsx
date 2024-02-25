import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';

function App() {

  const router = createBrowserRouter([
    {
      element: <LayoutWithNav />,
      children: [
        // {
        //   path: "/",
        //   element: isLoggedIn()? <LandingPage /> : <Navigate to="/user/sign-in"/>
        // }
        {
          path: "/",
          element: <LandingPage />
        }
      ]
    },
    {
      element: <LayoutWithoutNav />,
      children: [
        // {
        //   path: "/user/sign-in",
        //   element: <SignInPage />
        // },
        // {
        //   path: "/user/sign-up",
        //   element: <SignUpPage />
        // }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App