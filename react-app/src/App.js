import logo from './logo.svg';
import './App.css';
import WeatherClass from './components/WeatherClass';
import WeatherFunction from './components/WeatherFunction';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Reducer from './components/Reducer';
import University from './components/CreateRefUseRef';
import LoginForm from './components/ReactiveLoginForm';


function App() {
  return (
    <div className="App">
       <div style={{display:"inline-flex", flexWrap:"wrap"}}>
        <LoginForm />
       </div>
       <div style={{display:"inline-flex", flexWrap:"wrap"}}>
          <University />
          <Reducer />
          <WeatherFunction city="Pune"/>
          <WeatherClass city="Pune" low={12} high={20}/>
        </div>
        {/* <div style={{display:"inline-flex", flexWrap:"wrap"}}>
          <CounterFunction />
          <CounterClass />
        </div> */}
    </div>
  );
}

export default App;
