import * as React from 'react';
import { Button, View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from '../Component/Button';


function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../Image/logo.png')}
      />
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Button')}>
          <Text style={styles.tittle}>Welcome to Our Website</Text>
        </TouchableOpacity>
    </View>
  );
}
 
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:"#C51162",
    justifyContent: "space-evenly",
    marginTop:20,
  },
   tinyLogo: {
    width: 340,
    height: 120,
    marginTop:-50,
  },
 button: {
    marginTop: -30,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    width:300,
  },
  tittle: {
    color: 'white',
    fontSize: 20,
    textShadowColor:"red",
    textShadowOffset : {width:2 , height:2},
    textShadowRadius:15,
  },
});