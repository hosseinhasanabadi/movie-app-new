import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import MobileNavigat from "./components/MobileNavigat";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setimageURL } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
      console.log("response", response.data.results);
    } catch (erore) {
      console.log("erore", erore);
    }
  };



  const fetchconfiguration = async()=>{
    try{
const response = await axios.get('/configuration')
dispatch(setimageURL(  response.data.images.secure_base_url+"original"))
console.log("configuration",
   response.data.images.secure_base_url+"original"

);
    }catch (erore) {
      console.log("erore", erore);
    }
  }



  useEffect(() => {
    fetchTrendingData();
    fetchconfiguration()
  }, []);


  console.log("Access Token:", import.meta.env.VITE_ACCESS_TOKEN);
  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigat />
    </main>
  );
}

export default App;
