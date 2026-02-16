import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Navbar from "./components/Navbar";
import { EventProvider } from "./context/EventContext";

function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <div className="min-w-[1440px] bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
          <Navbar />
          <div className="max-w-[1200px] mx-auto px-8 py-10">
  
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/create" element={<CreateEvent />} />
          </Routes>
            
          </div>
        </div>
    </BrowserRouter>
    </EventProvider >
  );
}

export default App;
