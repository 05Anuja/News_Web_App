import React from "react";
import News from "./News_Search/News";
import Navbar from "./Components/Navbar";

const App = () => {
  // https://newsapi.org/v2/everything?q=India&from=2025-07-08&sortBy=popularity&apiKey=55f9d78a9907409ea884d4b121bce8f8
  return (
    <>
      <Navbar />
      <News />
    </>
  );
};

export default App;
