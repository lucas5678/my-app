import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './index';
import { Pass } from './senhas';
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Router() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon:({focused,size,color}) =>{
                        if(focused){
                            return<Ionicons size={size} color={color} name='home'/>
                        }
                        else{
                            return<Ionicons size={size} color={color} name='home-outline'/>
                        }
                    }
                }}
            />

            <Tab.Screen
                name='Senhas'
                component={Pass}
                options={{
                    headerShown:false,
                    tabBarIcon:({focused,size,color}) =>{
                        if(focused){
                            return<Ionicons size={size} color={color} name='lock-closed'/>
                        }
                        else{
                            return<Ionicons size={size} color={color} name='lock-closed-outline'/>
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}