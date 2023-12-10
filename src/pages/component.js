import { View,Text,StyleSheet,Pressable } from "react-native";
import React from "react";

export function PassItem({senhas,removerSenha}){
    console.log("Senhas: " + senhas)
    return(
        <Pressable onLongPress={removerSenha} style={style.container}>
            
            <Text style={style.senhasText}>{senhas}</Text>
           
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        padding:12,
        marginTop:8,
        marginBottom:10,
        alignItems:'center',
        borderRadius:25
    },
    containerSenhas:{
        width:'90%',
        alignItems:'center'
    },
    senhasText:{
        color:"#fff",
        fontSize:18,
    }
})