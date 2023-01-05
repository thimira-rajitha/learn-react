import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Rajitha';
  const handleNameChange = () => {
    const names = ['Thimira', 'Rajitha'];
    const int = Math.floor(Math.random() * 2);
    return names[int];
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Const : Hello {name}!
          <br />
          Random Function : Hello {handleNameChange()}!
        </p>
        {/* Javascript Expression insert into jsx using {}
      otherwise Html */}
        <p>Rajitha</p>
        <p>{'Rajitha'}</p>
        <p>{1}</p>
        <p>{[1, 2, 3]}</p>
        <p>[1,2,3]</p>
        {/* 
      prompt error. we can't display an object
      <p>{{a:1,b:2}}</p>
      
      <p>{2 === 4}</p> //false. but not showing. bcz it will not render boolean
      */}
      </header>
    </div>
  );
}

export default App;
