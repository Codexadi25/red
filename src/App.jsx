import { useState } from 'react';
import './App.css';
import t1 from './flowers.gif';
import t2 from './kisses.gif';

function App() {
  const [count, setCount] = useState(0);
  const [yfont, setYFont] = useState(16);
  const [nfont, setNFont] = useState(16);
  const [display, setDisplay] = useState('');
  const [st, setSt] = useState('Will you forever be mine?')
  const [d, setD] = useState('');
  const [teddy, setTeddy] = useState(t1);
  
  function change() {
    setCount( count + 5 );
    setYFont( yfont + 10 );
    setNFont( nfont - 1 );
    if (nfont <= 8){
      setDisplay('none')
    }
  }
  function celebrate() {
    setTeddy(t2)
    setD('hidden');
    setSt('I Love You till eternity.')
  }

  return (
    <div className='App'>
      <img src={teddy} />
      <p className='qust'>{st}</p>
      <div className='container' style={{visibility: `${d}`}}>
        <div
          className='btn yes' onClick={ () => celebrate() }
          style={{height: `${count + 74}px`, width: `${74 + count}px`}}>
          <i style={{font: `${yfont}`}}>Yes</i>
        </div>
        <div
          className='btn no' onClick={change}
          style={{height: `${74 - count}px`, width: `${74 - count}px`, display: `${display}`}}>
          <i fontSize={yfont}>No</i>
        </div>
      </div>
    </div>
  )
}

export default App
