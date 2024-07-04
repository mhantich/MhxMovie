import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppLayout from "./AppLayout";
import Lottie from "lottie-react";
import { loading } from "./animation";
import { useDispatch } from "react-redux";
import { useGetMovieQuery } from '@/store/MovieApi';
import { fetchFailure, fetchStart, fetchSuccess } from "./store/NewAuth";

const Home = lazy(() => import("./page/Home"));
const HomeSections = lazy(() => import("./page/HomeSection"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/openFix",
      
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
  
        path: "/",
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="fixed  z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loading}
                  loop={true}
                />
              </div>
            }
          >
            <HomeSections />
          </Suspense>
        ),
  
  },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  const { data: movies, error: moviesError, isLoading } = useGetMovieQuery();
  useEffect(() => {
    dispatch(fetchStart());
    
    if (isLoading) {
      return;
    }

    if (moviesError) {
      dispatch(fetchFailure(moviesError));
    } else {
      dispatch(fetchSuccess(movies));
    }
  }, [dispatch, movies, moviesError, isLoading]);


  return (
    <div className="min-h-screen bg-slate-100">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
