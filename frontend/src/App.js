import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import HomeScreen from './screens/homeScreen';
import Footer from './components/footer';
import ProductScreen from './screens/productScreen';

function App() {
  return (
    <>
      <Router>
      <Header />
      <main className="py-3">
        <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:_id" component={ProductScreen} />
        </Container>
      </main>      
      <Footer />
      </Router>
    </>
  );
}

export default App;
