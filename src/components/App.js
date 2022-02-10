import { useState } from 'react';
// import { ref, onValue, update } from 'firebase/database';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
// import firebaseDB from '../base';

const App = () => {
  const [fishState, setFishState] = useState({});
  const [orderState, setOrderState] = useState({});

  // const { storeId } = props.match.params;

  // useEffect(() => {
  //   const fishesRef = ref(firebaseDB, `${storeId}/fishes`);
  //   onValue(fishesRef, (snapshot) => {
  //     if (snapshot.val()) setFishState(snapshot.val());
  //   });
  //   setOrderState(JSON.parse(localStorage.getItem(storeId)));
  // }, [storeId]);

  // useEffect(() => {
  //   const fishesRef = ref(firebaseDB, `${storeId}/fishes`);
  //   update(fishesRef, fishState);
  // }, [fishState, storeId]);

  // useEffect(() => {
  //   localStorage.setItem(storeId, JSON.stringify(orderState));
  // }, [storeId, orderState]);

  const addFish = (fish) => {
    // 1. Use spread operator to grab what existed before, and then add the new fish
    setFishState((prevState) => ({
      ...prevState,
      [`fish${Date.now()}`]: fish,
    }));
  };

  const updateFish = (key, updatedFish) => {
    setFishState((prevState) => ({
      ...prevState,
      [key]: updatedFish,
    }));
  };

  const deleteFish = (key) => {
    setFishState((prevState) => ({ ...prevState, [key]: undefined }));
  };

  const loadSampleFishes = () => {
    setFishState(sampleFishes);
  };

  const addToOrder = (key) => {
    setOrderState((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1 || 1,
    }));
  };

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishState).map((key) => (
            <Fish
              key={key}
              index={key}
              details={fishState[key]}
              addToOrder={addToOrder}
            />
          ))}
        </ul>
      </div>
      <Order fishes={fishState} order={orderState} />
      <Inventory
        addFish={addFish}
        loadSampleFishes={loadSampleFishes}
        fishes={fishState}
        updateFish={updateFish}
        deleteFish={deleteFish}
      />
    </div>
  );
};

export default App;
