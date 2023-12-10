import { View, Text, StyleSheet, FlatList,ToastAndroid} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import BDSenhas from '../Hooks/BDSenhas'
import {PassItem} from './component'

export function Pass() {
    const [listPass,setListPass] = useState([]);
    const focused = useIsFocused();
    const {getItem, deleteItem} = BDSenhas();

    useEffect(()=>{
        async function loadPass(){
            const pass = await getItem("@pass");
            setListPass(pass);
        }
        loadPass();
    },[focused])
    
    async function deleteSenha(item){
        const pass = await deleteItem("@pass",item);
        setListPass(pass);
        ToastAndroid.show('Senha deletada', ToastAndroid.SHORT);
    }
    return (
        <SafeAreaView>
            <View style={style.header}>
                <Text style={style.textHeader}>
                   Minhas Senhas
                </Text>
            </View>
            <View style = {style.contentListSenhas}>
                <FlatList
                data={listPass}
                keyExtractor={(item) =>String(item)}
                renderItem={({item}) => <PassItem senhas={item} removerSenha ={ ()=> deleteSenha(item)} /> }
                />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    header: {
        backgroundColor:"#392de9",
        paddingTop:54,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14,
        alignItems:'center'
    },
    textHeader:{
        color:"#FFF",
        fontSize:24,
        fontWeight:'bold'
    },
})