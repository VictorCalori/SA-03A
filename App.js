import react from 'react';
import { View } from 'react-native';
import SimpleWidget from './SimpleWidget';
import Rodapé from './Rodapé';
import Cabeçalho from './Cabeçalho';



const App = () => {
  return (

    <View>
      <Cabeçalho />
      <SimpleWidget />
      <Rodapé />

    </View>
  );
};

export default App;