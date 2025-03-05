import { useState } from "react";
import { View } from "react-native-pape";
import { Chip } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";


export default function LocationItem({locationItem}) {
    



    return(

        /*Name of the location, description of the location, iconbutton, star rating*/



        <View>
            
            <Chip>{locationItem.locationText}</Chip>

           <StarRating/>
            
        </View>
    )
}