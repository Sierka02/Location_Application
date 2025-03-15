import { View, Text, StyleSheet } from "react-native";


    
export default function LocationItem({ locationItem }) {


    

    return(




        <View style={styles.todoItem}>
                

                <Text>{locationItem.locationText}</Text>
                <Text>{locationItem.locationDesc}</Text>

                <Text>{locationItem.rating}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginVertical: 5
    }
    
})