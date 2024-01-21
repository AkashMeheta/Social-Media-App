
import "bootstrap/dist/css/bootstrap.css";
import style from "./css/App.module.css";

import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import { useState } from "react";
import Display from "./components/display";
import PostListProvider from "./store/postStore";

function App() {
  const [ displayComponent, setDisplayComponent ] = useState("HomeFeed");

  return ( 
    <>
    <PostListProvider>
        <div className={`${style.container}`}>
          <div>
            <Sidebar className={`${style.sidebar}`} displayComponent={displayComponent} setDisplayComponent={setDisplayComponent}></Sidebar>
          </div>
          <div className={`${style.content}`}>
            <Header></Header>
            <Display displayComponent={displayComponent}></Display>
            <Footer></Footer>
          </div>
        </div>
    </PostListProvider>
    </>
  )
}

export default App
