import React, { ChangeEvent, Component } from 'react';
import logo from './logo.svg';
import './App.css';
interface State {
  magassag: number;
  suly: number;
  BMIErtek: number;
  idealisMinTomeg: number;
  idealisMaxTomeg: number;
}
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      magassag: 0,
      suly: 0,
      BMIErtek: 0,
      idealisMinTomeg: 0,
      idealisMaxTomeg: 0,
    }
  }
  sulyBeallit = (e: ChangeEvent) => {
    let tempSuly = (e.currentTarget as HTMLInputElement).value;
    this.setState({
      suly: parseInt(tempSuly)
    })
  }
  magassagBeallit = (e: ChangeEvent) => {
    let tempMagassag = (e.currentTarget as HTMLInputElement).value;
    this.setState({
      magassag: parseInt(tempMagassag)
    })
  }
  BMISzamitas = () => {
      this.setState({
        BMIErtek:  this.state.suly / Math.pow((this.state.magassag/100), 2)
      })
      this.setState({
        idealisMaxTomeg: Math.pow((this.state.magassag/100), 2) * 24.9
      })
      this.setState({
        idealisMinTomeg: Math.pow((this.state.magassag/100), 2) * 18.5
      }) 
  }
  render() {
    return <div >
      <section id="bekeres">
      <h2>BMI kalkulátor</h2>
      <p>Kérem adja meg a magasságát centiméterben: <input type="number" onChange={this.magassagBeallit}></input></p>
      <p>Kérem adja meg a testsúlyát kilogrammban: <input type="number" onChange={this.sulyBeallit}></input></p>
      <button id="szamitas" onClick={this.BMISzamitas}>Számítás</button>
  </section>    
  <section>
      <h2 id="eredmeny">Az ön BMI értéke: {this.state.BMIErtek}</h2>
      <table>
          <tr className={this.state.BMIErtek < 18.5 ? 'kiemelt' : ''}>
              <td className={"oszlop1"}>18,5 vagy kevesebb</td>
              <th className={"oszlop2"}>sovány</th>
          </tr>
          <tr className={this.state.BMIErtek >= 18.5 && this.state.BMIErtek < 25 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>18,5 - 24,9</td>
              <td className={'oszlop2'}>normál</td>
          </tr>
          <tr className={this.state.BMIErtek >= 25 && this.state.BMIErtek < 30 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>25 - 29,9</td>
              <td className={'oszlop2'}>túlsúly</td>
          </tr>
          <tr className={this.state.BMIErtek >= 30 && this.state.BMIErtek < 35 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>30 - 34,9</td>
              <td className={'oszlop2'}>I. fokú  elhízás</td>
          </tr>
          <tr className={this.state.BMIErtek >= 35 && this.state.BMIErtek < 40 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>35- 39,9</td>
              <td className={'oszlop2'}>II. fokú  elhízás</td>
          </tr>
          <tr className={this.state.BMIErtek >= 40 ? 'kiemelt' : ''}>
              <td className={'oszlop1'}>40 vagy több</td>
              <td className={'oszlop2'}>III. fokú  elhízás</td>
          </tr>
      </table>
      <h2>Az ön ideális testtömege: {(this.state.idealisMinTomeg + this.state.idealisMaxTomeg) / 2}</h2>
      <table>
        <tr>
          <td>{this.state.idealisMinTomeg} - {this.state.idealisMaxTomeg}</td>
          <td>Kívánatos szélső érték</td>
        </tr>
      </table>
  </section>
</div>
  }
}
export default App;