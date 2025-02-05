import TabsIcon from "@/components/TabsIcon";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFCB05",
        tabBarInactiveTintColor: "#DCDBEB",
        tabBarStyle: {
          backgroundColor: "#1B2C5E",
          borderTopColor: "#DCDBEB",
          borderTopWidth: 1,
          height: 75,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={icons.home}
              color={color}
              title="Home"
              focused={focused}
              iconSize={` ${focused ? "w-9 h-9" : "w-7 h-7"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={icons.search}
              color={color}
              title="Search"
              focused={focused}
              iconSize={` ${focused ? "w-8 h-8" : "w-5 h-5"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="berry"
        options={{
          title: "Berries",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={icons.berry}
              color={color}
              title="Berries"
              focused={focused}
              iconSize={` ${focused ? "w-8 h-8" : "w-5 h-5"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={icons.profile}
              color={color}
              title="Profile"
              focused={focused}
              iconSize={` ${focused ? "w-8 h-8" : "w-5 h-5"}`}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
