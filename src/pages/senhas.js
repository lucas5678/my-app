import { View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import BDSenhas from '../Hooks/BDSenhas'

export function Pass() {
    const [listPass,setListPass] = useState([]);
    const focused = useIsFocused();
    const {getItem} = BDSenhas();

    useEffect(()=>{
        async function loadPass(){
            const pass = await getItem("@pass");
            setListPass(pass);
        }
        loadPass();
    },[focused])

    return (
        <SafeAreaView>
            <View style={style.header}>
                <Text style={style.textHeader}>
                   Minhas Senhas
                </Text>
            </View>
            <View style = {style.contentListSenhas}>
                <FlatList
                style ={style.senhas}
                data={listPass}
                keyExtractor={(item) =>String(item)}
                renderItem={({item}) =><Text style = { style.textSenhas}>{item}</Text>}
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
    contentListSenhas:{
        paddingTop: 10,
        alignItems:'center'
    },
    senhas:{
        width:"90%",
        paddingTop: 10,
        backgroundColor:"#000",
    },
    textSenhas:{
        paddingTop:5,
        color: "#fff",
        fontSize:20
    }
})