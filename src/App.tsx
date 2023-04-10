// Core
import { useEffect } from 'react';

// Stores
import authStore from './stores/authStore';
import bonusStore from './stores/bonusStore';

// Components
import Layout from './ui/layout/Layout';

function App() {
  const { authorization } = authStore;
  const { getBonusInfo } = bonusStore;

  useEffect(() => {
    authorization();
    getBonusInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
