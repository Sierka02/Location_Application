import { View, Text, StyleSheet } from "react-native";
import { Chip, IconButton, MD2LightTheme, MD3LightTheme } from "react-native-paper";


    
export default function LocationItem({ locationItem }) {


    
    const chipStyle={
        flex: 1,
        backgroundColor: MD3LightTheme.colors.primaryContainer,
        borderWidth: 1,
        paddingVertical: 2 
    }

    return(



        
        <View style={styles.todoItem}>  
            
                <Chip> Name: {locationItem.locationText}</Chip>
                <Chip> Description: {locationItem.locationDesc}</Chip>
                <Chip> Rating: {locationItem.rating}/5</Chip>

                 <IconButton icon={'map-marker'} iconColor="red" size={32}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5,
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: MD3LightTheme.colors.primaryContainer   }
    
})