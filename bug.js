import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect Route causing error */}
        <Route path="/contactus" element={<ContactUs />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;