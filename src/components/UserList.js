import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const UserList = (props) => {

    const navigation = props.navigation;
    const users = props.users;

    const Item = ({ user }) => (
        <>
            <View style={styles.item}>
                <Button style={styles.title} mode="contained" onPress={() => navigation.navigate("UserDetail", { userId: user.id })}>
                    {user.name}
                </Button>
            </View>
        </>
    );

    const renderUser = ({ item }) => (
        <Item user={item} />
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
    title: {
        backgroundColor: '#208fd8'
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default UserList