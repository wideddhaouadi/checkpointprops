import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js/Profile';
import Button from './Profile.js/Button';

function App() {
  return (
    <div className="App">
    <Profile fullName="wideddhaouadi" bio="slt" profession="architecte" >
      <img src ="../photo.jpeg "/>
      <Button name="wided"/>
      </Profile>
    {/* <Profile /> */}
    </div>
  );
}

export default App;
