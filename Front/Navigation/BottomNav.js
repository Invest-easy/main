import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SearchBase from '../Components/SearchBase'
import WalletBase from '../Components/WalletBase'
import WatchlistBase from '../Components/WatchlistBase'
import SettingsBase from '../Components/SettingsBase'


const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'watchlist', title: 'Accueil', icon: 'home' },
    { key: 'search', title: 'Découvrir', icon: 'magnify' },
    { key: 'wallet', title: 'Portefeuille', icon: 'wallet' },
    { key: 'settings', title: 'Paramètres', icon: 'settings' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    watchlist: WatchlistBase,
    search: SearchBase,
    wallet: WalletBase,
    settings: SettingsBase
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: 'white' }}

    />
  );
};

export default BottomNav;
