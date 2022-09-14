import Navbar from './Components/navbar'
import Stays from './Components/stays';
import Location from './Components/location';
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
      <div className='location-grid'>
        <Location
        image="./location/loc1.jpg"
        name="Antilia,Mumbai"
        rating="5.0"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc2.jpg"
        
        name="St. John,Budapest"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc3.jpg"
        
        name="La tao,Laddakh"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc4.jpg"
        
        name="The Pristine,Malan"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc5.jpg"
        
        name="Amphibia,France"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc6.jpg"
        
        name="The Abbys,Georgetown"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

<Location
        image="./location/loc7.jpg"
        
        name="Plutonic,Miami"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc8.jpg"
        
        name="Atlantis,Maldives"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc9.jpg"
        
        name="Jumeriah,Dubai"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc10.jpg"
        
        name="The Shire,Transylvania"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc11.jpg"
        name="Bulge,UK"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />

        <Location
        image="./location/loc12.jpg"
        name="Queens,Austria"
        rating="4.6"
        distance="1300 kilometers"
        date="26-28 Sep"
        cost="$1400"
        />



      </div>
    </div>
  );
}

export default App;
