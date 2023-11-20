import logo from './logo.svg';
import styles from './style'
import './App.css';

import { CardDeal, Testimonials, Stats, Business, CTA, Billing, Clients, Footer, Navbar, Hero } from './components'

function App() {
  return (
    <div className="App">
      <div className="bg-primary w-full overflow-hidden">
          <div className={` pt-10${styles.paddingX} ${styles.flexCenter}`} >
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
              </div>
          </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
          </div>
      </div>
    </div>
  );
}

export default App;
