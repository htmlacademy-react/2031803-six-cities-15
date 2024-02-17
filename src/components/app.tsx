import React from 'react';
import MainPage from '../pages/main.tsx';

type AppProps = {
  offersCount: number;
}
const App = ({ offersCount } : AppProps): React.JSX.Element => (
  <MainPage offersCount={offersCount} />
);

export default App;
