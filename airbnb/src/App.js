import Navbar from './Components/navbar'
import Stays from './Components/stays';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='stays-menu'>
        <Stays
          image="./svg/tent.svg"
          text="Camping"
        />
        <Stays
            image="./svg/arctic.svg"
            text="Arctic"
        />
        <Stays
            image="./svg/beach.svg"
            text="Beach"
        />
        <Stays
            image="./svg/island.svg"
            text="Island"
        />
        <Stays
            image="./svg/castle.svg"
            text="Castle"
        />
        <Stays
            image="./svg/desert.svg"
            text="Desert"
        />
        <Stays
            image="./svg/lake.svg"
            text="Lake"
        />
        <Stays
            image="./svg/tropical.svg"
            text="Tropical"
        />
        <Stays
            image="./svg/boat.svg"
            text="Boat"
        />
        <Stays
            image="./svg/cabin.svg"
            text="Cabin"
        />
      </div>
    </div>
  );
}

export default App;
