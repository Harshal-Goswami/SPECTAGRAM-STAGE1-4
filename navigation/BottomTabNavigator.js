import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ionIcons from "@expo/vector-icons";
import {Feed} from "../screens/Feed";
import {Post} from "../screens/Post";
import TabNavigator from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <TabNavigator
          screenOptions={({route })=>({
              tabBarIcon: ({ focuse, color, size}) =>{
                  let iconName;
                  if(route.name === "Feed"){
                      iconName = focused
                      ?'book'
                      :'book-outline';
                  }else if(route.name === 'Post'){
                      iconName = focused ? 'create' : 'create-outline';
                  }
                  return <ionIcons name={iconName} size={size} color={color} />;
              }
          })} 
          tabBarOptions={{
              activeTintColor:"tomato",
              inactiveTintColor:"gray"
          }}
        >
          <Tab.Screen name="Feed" component={Feed}/>
          <Tab.Screen name="Post" component={Post}/>
        </TabNavigator>
    )
}
export  default BottomTabNavigator