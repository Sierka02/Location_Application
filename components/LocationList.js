import { FlatList, FlatListComponent, ScrollView } from "react-native";
import { List } from "react-native-paper";
import LocationItem from "./LocationItem";

export default function LocationList({locations}) {



    return(
        <FlatList data={locations} renderItem={({location}) => <LocationItem locationItem={item}/>}/>
    )
}

function AccorrdionList({locations, title}) {
    <List.Accordion>
        {locations.map(t => <LocationItem key={t.id} locationItem={t}/>)}
    </List.Accordion>
}