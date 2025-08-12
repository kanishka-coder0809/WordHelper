import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page as the default route */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: Handle 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
