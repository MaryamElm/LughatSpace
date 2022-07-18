import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/headerBar/Nav";
import { Home } from "./pages/home/Home";
import { OurServices } from "./pages/ourServ/OurServices";
import { Reg } from "./pages/registration/Reg";
import { Login } from "./pages/login/Login";
import styled from "styled-components";
import { RegConfirmed } from "./pages/regConfirmed/Sucess";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Nav />
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/ourServ" element={<OurServices />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/registration" element={<Reg />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/regConfirmed"
              element={<RegConfirmed />}
            ></Route>
          </Routes>
        </Content>
      </Router>
    </Suspense>
  );
}

const Content = styled.div`
  min-height: 100vh;
`;
export default App;