import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Article from "../../components/RouterSample/Article";

function UseParamsMulti () {
  return (
    <BrowserRouter>
      <h1>React Routerの例</h1>
      <Link to="/articles/life/1">🌱生活記事ID： 1</Link><br />
      <Link to="/articles/life/2">🌱生活記事ID： 2</Link><br />
      <Link to="/articles/news/3">📰ニュース記事： 3</Link><br />
      <hr />
      <Routes>
        {/* :categoryと:idの2つのパラメーターを指定 */}
        <Route path="/articles/:category/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}
export default UseParamsMulti;
