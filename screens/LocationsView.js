import { useContext, useState } from "react"
import { UserLocationsContext } from "../contexts/UserLocationsContext"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, PaperProvider, TextInput } from "react-native-paper"
import { addLocation } from "../firebase/FirestoreController"
import LocationList from "../components/LocationList"
import { StyleSheet } from "react-native"


export default function LocationsView() {

  
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [rating, setRating] = useState(0)


    const locations = useContext(UserLocationsContext)
  

    const handleAddLocation = () => {
      addLocation(name, description, rating)
    }
    console.log(locations);

    return(
  
      <PaperProvider>
      <SafeAreaView style={styles.LocationsStyle}>
        <TextInput label={'Name'} value={name} onChangeText={setName}/>
        <TextInput label={'Description'} value={description} onChangeText={setDescription}/>

        <TextInput keyboardType="number-pad" label={'rating /5'} value={rating} onChangeText={setRating}/>

          <Button mode='contained' onPress={handleAddLocation}>Add new location</Button>


      <LocationList locations={locations}/>
  
      
  
      </SafeAreaView>
      </PaperProvider>
    )
  

  }

  

  const styles = StyleSheet.create({
    LocationsStyle: {
      marginLeft: 5, marginRight: 5, gap: 3
    }
  });