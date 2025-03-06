import { FlatList, FlatListComponent, ScrollView } from "react-native";
import { List } from "react-native-paper";
import LocationItem from "./LocationItem";

export default function LocationList({locations}) {

 const savedLocation = []

 

    return(
        <FlatList data={locations} renderItem={({item}) => <LocationItem  locationItem={item}/>}/>
    )
}