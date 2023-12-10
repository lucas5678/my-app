import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorange = () =>{

    //// Método assíncrono para buscar itens salvos no AsyncStorage
    const getItem = async (key) =>{
        try{
            // Passo 1: Obter o valor associado à chave no AsyncStorage
            const passoword = await AsyncStorage.getItem(key);
             // Passo 2: Converter a string JSON em um array ou retornar um array vazio se for nulo ou indefinido
            return JSON.parse(passoword) || []
        }
        catch{
            // Tratar erros: exibir mensagem de erro no console e retornar um array vazio
            console.log("Erro ao buscar");
            return[]
        }
    }

    //// Método assíncrono para salvar um novo item no AsyncStorage
    const saveItem = async (key, value) => {
        try {
            // Passo 1: Obter a lista atual associada à chave
            let password = await getItem(key);
             // Passo 2: Adicionar o novo valor à lista existente
            password.push(value);
            // Passo 3: Atualizar o valor associado à chave no AsyncStorage
            await AsyncStorage.setItem(key, JSON.stringify(password));
        } catch (error) {
            // Tratar erros: exibir mensagem de erro no console
            console.log("Erro ao salvar " + value + ": " + error);
        }
    };

    //delete
    const deleteItem = async (key, item) => {
        // Use AsyncStorage.getItem para obter o valor correspondente à chave
        let password = await AsyncStorage.getItem(key);
      
        // Parse o valor retornado de AsyncStorage para um array
        let passwordArray = JSON.parse(password) || [];
      
        // Filtrar o array
        let myPass = passwordArray.filter((password) => {
          return password !== item;
        });
      
        // Atualizar o valor no AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(myPass));
      
        return myPass;
      };

    return{
        getItem,
        saveItem,
        deleteItem
    }
}

export default useStorange;