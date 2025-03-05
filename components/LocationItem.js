import { View, Text } from "react-native";
import StarRating from "react-native-star-rating-widget";


    
export default function LocationItem({ locationItem }) {


    return(



        <View>
                

                <Text>{locationItem.locationText}</Text>
                <Text>{locationItem.locationDesc}</Text>

                <Text>{locationItem.rating}</Text>

        </View>
    )
}