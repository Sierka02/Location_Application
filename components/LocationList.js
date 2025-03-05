import { FlatList } from "react-native";
import LocationItem from "./LocationItem";

    
export default function LocationList({ locations = [] }) {

    return(
         <FlatList keyExtractor={(item) => item.id.toString()} data={locations} renderItem={({item}) => <LocationItem  locationItem={item}/>}/>
    )

}


