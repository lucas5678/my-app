import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ToastAndroid } from 'react-native';
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard'
import BDSenhas from '../Hooks/BDSenhas'


export function ModalPass({ pass,handClose }) {
    const {saveItem} = BDSenhas();

    async function copiarSenha(){
        await Clipboard.setStringAsync(pass);
        await saveItem("@pass",pass)
        ToastAndroid.show('Senha Copiada', ToastAndroid.SHORT);
        handClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={styles.text}>Senha Gerada</Text>
                <TouchableOpacity style={styles.inputSenha} onLongPress={copiarSenha}>
                    <Text style={styles.textSenha}>
                        {pass} 
                    </Text>
                </TouchableOpacity>

                <View style={styles.btns}>
                <TouchableOpacity style={styles.btnVoltar} onPress={handClose}>
                    <Text style ={styles.textVoltar}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSalvar}>
                    <Text style ={styles.textSalvar} onPress={copiarSenha}>Salvar</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: "90%",
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        fontSize: 26,
        fontWeight: 'bold',
    },
    inputSenha: {
        width: "90%",
        padding: 10,
        backgroundColor: "#000",
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    textSenha: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    btns:{
        flexDirection:"row",
        width:"90%",
        marginTop:40,
        alignItems:'center',
        justifyContent:"space-between"
    },
    btnVoltar:{
        marginLeft:10,
        alignItems:"center"
    },
    textVoltar:{
        fontSize:20,
        fontWeight:"bold"
    },
    btnSalvar:{
        marginRight:5,
        width:"40%",
        padding:10,
        borderRadius:8,
        alignItems:"center",
        backgroundColor:"#392de9"
    },
    textSalvar:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold"
    }
});
