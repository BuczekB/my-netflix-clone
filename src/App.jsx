import './style/App.scss'

import Logo from './assets/images/logo.png'

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
      </div>
    </div>
  )
}

export default App
