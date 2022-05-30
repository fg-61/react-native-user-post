import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

const UserList = (props) => {

    const navigation = props.navigation;
    const users = props.users;

    const Item = ({ name }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate("posts")}>
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderUser = ({ item }) => (
        <Item name={item.name} />
    );
    
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={renderUser}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 24,
    }
});

export default UserList