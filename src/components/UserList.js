import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper';

const UserList = (props) => {

    const navigation = props.navigation;
    const users = props.users;

    const Item = ({ user }) => (
        <>
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("UserDetail", { userId: user.id })}>
                    <Card>
                        <Card.Content>
                            <Title style={styles.title}>{user.name}</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
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
        flex: 1,
        marginVertical: 20
    },
    title: {
        paddingBottom: 16,
    }
    ,
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default UserList