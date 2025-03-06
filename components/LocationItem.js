import { useState } from "react";
import { View } from "react-native-paper";
import { Chip } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";


export default function LocationItem({locationItem}) {
    

    return(



        <View>
            <Chip>
                
                <Text>{locationItem.locationText}</Text>
                <Text>{locationItem.locationDesc}</Text>

                <StarRating/>



            </Chip>
        </View>
    )
}