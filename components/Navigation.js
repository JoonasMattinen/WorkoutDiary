import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddWorkout from "./AddWorkout";
import Workouts from "./Workouts";
import Settings from "./Settings";
import { Entypo } from "@expo/vector-icons";


export default function Navigation() {
  
    const Tab = createBottomTabNavigator();
    
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Add Workout"
              component={AddWorkout}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Workouts"
              component={Workouts}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="list" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="user" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }