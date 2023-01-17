import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
interface State {
  datum: Date;
}
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      datum: new Date()
    }
    setInterval(() => {
      this.setState({
        datum: new Date()
      });
    }, 1000);
  }
  render() {
    return <div>
      <section id="bekeres">
      <h2>BMI kalkulátor</h2>
      <p>Kérem adja meg a magasságát centiméterben: <input type="number" id="magassag"></input></p>
      <p>Kérem adja meg a testsúlyát kilogrammban: <input type="number" id="suly"></input></p>
      <button id="szamitas">Számítás</button>
  </section>    
  <section>
      <h2 id="eredmeny">Az ön BMI értéke: </h2>
      <table>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop2'></td>
          </tr>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop2'></td>
          </tr>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop1'></td>
          </tr>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop2'></td>
          </tr>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop2'></td>
          </tr>
          <tr>
              <td className='oszlop1'></td>
              <td className='oszlop2'></td>
          </tr>
      </table>
      <h2>Az ön ideális testtömege: </h2>
  </section>
</div>
  }
}
export default App;