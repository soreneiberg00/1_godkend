import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Import af de to andre sider så de kan navigeres til nede i Tab.Screen
import View1 from './View1';
import View2 from './View2';

//Import af de tre dropdowns fra Components-mappen
import PriceDropdown from './Components/PriceDropdown';
import CategoryDropdown from './Components/CategoryDropdown'
import SizeDropdown from './Components/SizeDropdown';

//Etablerer navigation mellem siderne
const Tab = createBottomTabNavigator();

//Siden hvor brugeren kan vælge kriterier for hvad der skal vises i sit feed
function App ()  {
  return (

    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={View1}/>
      <Tab.Screen name="Details" component={View2}/>
          
        
        <Tab.Screen name="Settings">
          {() => (
            <View style={styles.container}>
              <Text style={styles.input}>Price:</Text>
              <PriceDropdown/>
              <Text style={styles.input}>Category:</Text>
              <CategoryDropdown/>
              <Text style={styles.input}>Size:</Text>
              <SizeDropdown/>
              <Button title="Save" onPress={() => alert("This could also have worked")}/>
            </View>
            
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

//Styling af siden
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
  }
});
