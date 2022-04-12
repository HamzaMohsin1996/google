import './App.css';
import Header from './Components/Header.js';
import Container from '@mui/material/Container';
import SearchContent from './Components/SearchContent';
import Footer from './Components/Footer';

function App() {
  return (<>
    <Container maxWidth="100 ">
       <Header /> 
       <SearchContent />
    </Container>
     <Footer />
     </>
  );
}

export default App;
