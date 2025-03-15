import { use, useContext, useState } from "react"
import { UserLocationsContext } from "../contexts/UserLocationsContext"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, PaperProvider, TextInput } from "react-native-paper"
import { addLocation } from "../firebase/FirestoreController"
import LocationList from "../components/LocationList"
import { StyleSheet, View } from "react-native"


export default function LocationsView() {

  
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [rating, setRating] = useState(0)
    const [location, setLocation] = useState('')


    const locations = useContext(UserLocationsContext)
  

    return(
  
    <View style={styles.LocationsStyle}>
      
        <TextInput label={'Name'} value={name} onChangeText={setName}/>
        <TextInput label={'Description'} value={description} onChangeText={setDescription}/>

        <TextInput keyboardType="number-pad" label={'rating /5'} value={rating} onChangeText={setRating}/>

          <Button mode='contained' onPress={() => addLocation(name, description, parseFloat(rating) || 0)}>Add new location</Button>


      <LocationList locations={locations}/>
  
      </View>
    )
  

  }

  

  const styles = StyleSheet.create({
    LocationsStyle: {
      marginLeft: 5, marginRight: 5, gap: 3
    }
  });