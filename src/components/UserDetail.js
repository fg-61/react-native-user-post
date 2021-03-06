import React from 'react'
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native'

const UserDetail = (props) => {

    const navigation = props.navigation;
    const user = props.user;

    const onPressGoBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <ScrollView>
                <Appbar.Header style={styles.header}>
                    <Appbar.BackAction onPress={() => onPressGoBack()} />
                    <Appbar.Content title={user.username} subtitle={user.name} />
                </Appbar.Header>
                <Card>
                    <Card.Content>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Username</Paragraph>
                            <Title>{user.username}</Title>
                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Name</Paragraph>
                            <Title>{user.name}</Title>
                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Email</Paragraph>
                            <Title>{user.email}</Title>
                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Address</Paragraph>

                            <Paragraph>City</Paragraph>
                            <Title>{user.address && user.address.city}</Title>

                            <Paragraph>Street</Paragraph>
                            <Title>{user.address && user.address.street}</Title>

                            <Paragraph>Suite</Paragraph>
                            <Title>{user.address && user.address.suite}</Title>

                            <Paragraph>ZIP Code</Paragraph>
                            <Title>{user.address && user.address.zipcode}</Title>

                            <Paragraph style={{ marginBottom: 5 }}>Location</Paragraph>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paragraph>Latitude:    </Paragraph>
                                    <Title>{user.address && (user.address.geo && user.address.geo.lat)}</Title>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paragraph>Longitude:    </Paragraph>
                                    <Title>{user.address && (user.address.geo && user.address.geo.lng)}</Title>
                                </View>

                            </View>

                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Phone</Paragraph>
                            <Title>{user.phone}</Title>
                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Website</Paragraph>
                            <Title>{user.website}</Title>
                        </View>
                        <View style={styles.item}>
                            <Paragraph style={styles.title}>Company</Paragraph>

                            <Paragraph>Company Name</Paragraph>
                            <Title>{user.company && user.company.name}</Title>

                            <Paragraph>Catch Phrase</Paragraph>
                            <Title>{user.company && user.company.catchPhrase}</Title>

                            <Paragraph>Broadcasting</Paragraph>
                            <Title>{user.company && user.company.bs}</Title>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>

        </>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    title: {
        color: '#3498db',
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 10
    },
    item: {
        paddingBottom: 24
    },
    header: {
        backgroundColor: '#f1c40f'
    }
})