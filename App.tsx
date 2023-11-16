
import { StyleSheet} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://capelleaandenijssel.stepzen.net/api/illmannered-anteater/__graphql',
  headers: {'Authorization':'apikey capelleaandenijssel::stepzen.io+1000::c2fc522197208bf93512c1168b8cc738c385169d4f93e368dc76d140e14c669b'},
  cache: new InMemoryCache(),
});



export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
   </TailwindProvider>
    
  );
}
