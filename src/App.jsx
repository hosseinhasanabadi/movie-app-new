import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import MobileNavigat from "./components/MobileNavigat";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieSlice";

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
  useEffect(() => {
    fetchTrendingData();
  }, []);
  console.log("Access Token:", import.meta.env.VITE_ACCESS_TOKEN);
  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigat />
    </main>
  );
}

export default App;
