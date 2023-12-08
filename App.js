import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>
        10 Caracteres
      </Text>

      <View style={styles.sliderArea}>
        <Slider
          style = {styles.slider}
          minimumValue={6}
          maximumValue={16}
          minimumTrackTintColor='#ff0000'
          maximumTrackTintColor='#000'
          thumbTintColor='#392de9'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.titleButton}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader:{
    width:300,
    height:300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
    marginBottom:10
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
  },
  sliderArea:{
    marginTop:14,
    marginBottom:14,
    width:"90%",
    height:50,
    backgroundColor:"#f3f3ff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8
  },
  slider:{
    width:"80%",
  },
  button:{
    marginTop:10,
    backgroundColor:"#392de9",
    width:"90%",
    padding:10,
    borderRadius:8,
    alignItems:'center'
  },
  titleButton:{
    fontSize:20,
    color:"#FFF",
    fontWeight:'bold',

  }
});
