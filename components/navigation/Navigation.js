import React from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Peliculas from "../Peliculas";
import Series from "../Series";
import Estrenos from "../Estrenos";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="peliculas"
        component={Peliculas}
        options={{
          title: "Películas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie" {...{ color, size }} />
          ),
        }}
      />
      <Tab.Screen
        name="series"
        component={Series}
        options={{
          title: "Series",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-list" {...{ color, size }} />
          ),
        }}
      />
      <Tab.Screen
        name="estrenos"
        component={Estrenos}
        options={{
          title: "Estrenos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" {...{ color, size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
