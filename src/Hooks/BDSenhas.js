import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorange = () =>{

    //buscar itens salvos
    const getItem = async (key) =>{
        try{
            const passoword = await AsyncStorage.getItem(key);
            return JSON.parse(passoword) || []
        }
        catch{
            console.log("Erro ao buscar");
            return[]
        }
    }

    //salvar
    const saveItem = async (key, value) => {
        try {
            let password = await getItem(key);
            password.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(password));
        } catch (error) {
            console.log("Erro ao salvar " + value + ": " + error);
        }
    };

    //delete
    const deleteItem = async (key,item) =>{
        let passoword = getItem(key);
        let Mypass = passoword.filter((passoword) =>{
            return(passoword != item)
        })
        await AsyncStorage.setItem(key,JSON.stringify(passoword))
        return Mypass;
    }

    return{
        getItem,
        saveItem,
        deleteItem
    }
}

export default useStorange;