import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Novedades" component={NovedadesScreen}/>
        <Drawer.Screen name="Contactos" component={ContactosScreen}/>
        <Drawer.Screen name="Perfil" component={PerfilScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )


}