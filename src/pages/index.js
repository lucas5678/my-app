import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View, Image, TouchableOpacity,Modal } from 'react-native';
import { useState } from 'react';
import {ModalPass} from '../modal/modal'

export  function Home() {

  const [size,setSize] = useState(10)
  const [passwordValue,setPaswordValue] = useState("");
  const [modalVisible,setModalVisible] = useState(false);

  let charset = "abcdefghijklmnopqrstuvxzwy123456789@#$%"

  function genereatPass(){
    let password = "";
    for(let i =0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random()*n));
    }
    setPaswordValue(password);
    setModalVisible(true);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>
        {size} Caracteres
      </Text>

      <View style={styles.sliderArea}>
        <Slider
          style = {styles.slider}
          minimumValue={6}
          maximumValue={16}
          minimumTrackTintColor='#ff0000'
          maximumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={genereatPass}>
        <Text style={styles.titleButton}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <ModalPass pass ={passwordValue} handClose={() => setModalVisible(false)}/>
      </Modal>
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
