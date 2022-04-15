import '../App.css';
import Header from './Header.js';
import Container from '@mui/material/Container';
import SearchContent from './SearchContent';
import Footer from './Footer';

const Google = () => {
    return (
        <>
        <Container maxWidth="100 ">
           <Header /> 
           <SearchContent />
        </Container>
         <Footer />
        </>
    );
  }
  
  export default Google;