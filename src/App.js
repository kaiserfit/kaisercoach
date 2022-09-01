import React, {useState, useEffect} from "react";


import Login from "./pages/Login";
import MainDock from "./pages/MainDock";

function App() {
  const [isLogged, setIsLogged] = useState(true)

  
  return (

    <>
    {(isLogged) ? <MainDock /> : <Login setIsLogged={setIsLogged} />}
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Login />}></Route>
    //     <Route path="/home" element={<MainDock />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
