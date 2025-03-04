import { useContext, useState } from "react"
import { UserLocationsContext } from "../contexts/UserLocationsContext"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, TextInput } from "react-native-paper"
import StarRating from "react-native-star-rating-widget"

export default function LocationsView() {

    const [rating, setRating] = useState(0)
    const [location, setLocation] = useState('')
    const locations = useContext(UserLocationsContext)
  
    return(
  
      <SafeAreaView style={{marginLeft: 5, marginRight: 5, gap: 3}}>
        <TextInput label={'Name'} value={location} onChangeText={setLocation} right/>
        <TextInput label={'Description'} value={location} onChangeText={setLocation} right/>

        <StarRating
        style={{padding: 15, backgroundColor: 'black'}}
        starSize={35}
        emptyColor="gray"
         rating={rating}
         onChange={setRating}
        />

  
        <Button mode='contained'>Add new location</Button>
  
      </SafeAreaView>
    )
  
  }