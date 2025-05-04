import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import MobileNavigat from "./components/MobileNavigat";
function App() {
  return (
    <main className="pb-14 lg:pb-0" >
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigat/>
    </main>
  );
}

export default App;
