import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tab.Screen name='home' component={HomeScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home-outline" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome6 name="bookmark" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                )
            }}
        />

    </Tab.Navigator>
  )
}