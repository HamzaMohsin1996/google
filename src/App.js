import "./App.css";
import Header from "./Components/Header.js";
import SearchContent from "./Components/SearchContent";
import Footer from "./Components/Footer";
import Expenses  from "./Components/Expenses";

function App() {
 
  return (
    <>
      {/* <Container maxWidth="100 ">
        <Header />
        <SearchContent />
      </Container>
      <Footer /> */}
     <Expenses />
    </>
  );
}

export default App;