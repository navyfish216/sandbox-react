import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../components/RouterSample/Home";
import About from "../../components/RouterSample/About";
import Contact from "../../components/RouterSample/Contact";
import Header from "../../components/RouterSample/Header";
import NotFound from "../../components/RouterSample/NotFound";

function RouterView () {
  return (
    <BrowserRouter>
      <h1>React Routerの例</h1>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 存在しないURLをすべてキャッチ */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterView;

