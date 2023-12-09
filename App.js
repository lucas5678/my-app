import { NavigationContainer} from '@react-navigation/native';
import {Router} from './src/pages/Rotas'
export default function App() {

  return (
    <NavigationContainer >
      <Router/>
    </NavigationContainer>
  );
}

