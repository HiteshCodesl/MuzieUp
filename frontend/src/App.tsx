import { LoginCard } from "./Utils/LoginCard";
import { Routes, Route } from "react-router-dom";
import Start from "./Utils/Start";
import { SignupCard } from "./Utils/SignupCard";

function App() {

  return (
    <div className="bg-[#121212] text-white h-screen w-screen">
   
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} />

      </Routes>
    </div>
  )
}

export default App;
