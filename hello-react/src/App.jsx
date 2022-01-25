import './App.css'
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Ironhack logo" />
        <img src={menu} alt="Hamburger menu" />
      </header>
      <main>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </main>
      <section>
        <div className="box">
          <img src={icon1} alt='Declarative'/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="box">
        <img src={icon2} alt='Components'/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="box">
        <img src={icon3} alt='Single-Way'/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component.</p>
        </div>
        <div className="box">
        <img src={icon4} alt='JSX'/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  )
}

export default App
