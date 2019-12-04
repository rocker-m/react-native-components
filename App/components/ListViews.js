import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const ListViews = () => {

    const [people, setPeople] = useState([
        { name: "sdasşh", id: 1 },
        { name: "mrerih", id: 1 },
        { name: "mel", id: 3 },
        { name: "sad", id: 4 },
        { name: "sxd", id: 5 },
        { name: "asdas", id: 6 }
    ]);

    const pressedItem = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter((p) => p.id != id);
        })
    }
    return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => (item.id)}
                    data={people}
                    renderItem={({ item }) => (

                        <TouchableOpacity onPress={() => pressedItem(item.id)}>
                            <Text style={styles.items}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                {/* <ScrollView>
            {people.map((item) => {
                return (
                    <View key={item.key}>
                        <Text style={styles.items}>{item.name}</Text>
                    </View>
                )
            })}
            </ScrollView> */}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
        // alignItems:'center',
        // justifyContent:'center'
    },
    items: {
        backgroundColor: '#f1f1f1',
        padding: 30,
        marginBottom: 10,
        fontSize: 17
    }
})
export default ListViews;

