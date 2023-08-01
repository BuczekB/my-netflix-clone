import './style/App.scss'

import Logo from './assets/images/logo.png'
import feature1 from './assets/images/feature-1.png'
import feature2 from './assets/images/feature-2.png'
import feature3 from './assets/images/feature-3.png'
import feature4 from './assets/images/feature-4.png'

function App() {
 

  return (
    <div className='container'>
      <div className='mainContainer'>
          <section className='heroSection'>
            <div className='heroSection-Bg'>
              <h1>Filmy, seriale i wiele więcej bez ograniczeń</h1>
              <p>Oglądaj wszędzie. Anuluj w każdej chwili.</p>
              <p>Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić konto.</p>
              <div className='heroSection-Bg-interaction'>
              <input placeholder='Adres e-mail'></input>
              <button>Rozpocznij</button>
              </div>
            </div>
            <nav className='heroSection-nav'>
              <div className='heroSection-nav-logo'>
                <img className='heroSection-nav-logo-img' src={Logo} alt=''></img>
              </div>
              <div className='heroSection-nav-itemBox'>
                <select name='languages' required>
                  <option value=''>Example</option>
                  <option value='Polish'>Polski</option>
                  <option value='English'>English</option>
                </select>
                <button>Zaloguj się</button>
              </div>
            </nav>
          </section>
          <section className='aboutSection'>
            <div className='aboutSection-singleBox'>
              <div className='aboutSection-singleBox-textBox'>
              <h2>Oglądaj na telewizorze</h2>
              <p>Oglądaj na telewizorach Smart TV, konsolach PlayStation i Xbox, odtwarzaczach Chromecast, Apple TV oraz Blu-ray i nie tylko.</p>
              </div>
              <div>
                <img src={feature1} alt="" />
              </div>
              <div className='aboutSection-singleBox-borderB'></div>
            </div>
            <div className='aboutSection-singleBox'>
            <div>
                <img src={feature2} alt="" />
              </div>
              <div className='aboutSection-singleBox-textBox'>
              <h2>Pobierz ulubione tytuły i oglądaj offline</h2>
              <p>Zapisz ulubione tytuły, aby zawsze mieć coś do obejrzenia.</p>
              </div>
              <div className='aboutSection-singleBox-borderB'></div>
            </div>
            <div className='aboutSection-singleBox'>
              <div className='aboutSection-singleBox-textBox'>
              <h2>Oglądaj wszędzie</h2>
              <p>Oglądaj filmy, seriale i programy bez ograniczeń na telefonie, tablecie, laptopie i telewizorze.</p>
              </div>
              <div>
                <img src={feature3} alt="" />
              </div>
              <div className='aboutSection-singleBox-borderB'></div>
            </div>
            <div className='aboutSection-singleBox'>
            <div>
                <img src={feature4} alt="" />
              </div>
              <div className='aboutSection-singleBox-textBox'>
              <h2>Utwórz profile dla dzieci</h2>
              <p>Pozwól dzieciom przeżywać przygody w towarzystwie uwielbianych bohaterów — w specjalnej sekcji serwisu oferowanej bezpłatnie w ramach członkostwa.</p>
              </div>
              <div className='aboutSection-singleBox-borderB'></div>
            </div>
          </section>
      </div>
    </div>
  )
}

export default App
