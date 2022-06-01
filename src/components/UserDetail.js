import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper';
import { View, ScrollView } from 'react-native'

const UserDetail = (props) => {

    const navigation = props.navigation;
    const user = props.user;

    return (
        <>
            <ScrollView>
                <Card>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Title>{user.username}</Title>
                    </Card.Content>
                </Card>
                <View>
                    <Card>
                        <Card.Content>
                            <Paragraph>Username</Paragraph>
                            <Title>{user.username}</Title>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Paragraph>Name</Paragraph>
                            <Title>{user.name}</Title>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Paragraph>Email</Paragraph>
                            <Title>{user.email}</Title>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Paragraph style={{ margin: 10, marginBottom: 10 }}>Address</Paragraph>

                            <Paragraph>City</Paragraph>
                            <Title>{user.address && user.address.city}</Title>

                            <Paragraph>Street</Paragraph>
                            <Title>{user.address && user.address.street}</Title>

                            <Paragraph>Suite</Paragraph>
                            <Title>{user.address && user.address.suite}</Title>

                            <Paragraph>ZIP Code</Paragraph>
                            <Title>{user.address && user.address.zipcode}</Title>

                            <Paragraph style={{ margin: 10, marginBottom: 10 }}>Geo</Paragraph>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paragraph>Latitude: </Paragraph>
                                    <Title>{user.address && (user.address.geo && user.address.geo.lat)}</Title>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paragraph>Longitude: </Paragraph>
                                    <Title>{user.address && (user.address.geo && user.address.geo.lng)}</Title>
                                </View>

                            </View>

                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Paragraph>Phone</Paragraph>
                            <Title>{user.phone}</Title>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Paragraph>Website</Paragraph>
                            <Title>{user.website}</Title>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Paragraph style={{ margin: 10, marginBottom: 10 }}>Company</Paragraph>
                            
                            <Paragraph>Company Name</Paragraph>
                            <Title>{user.company && user.company.name}</Title>

                            <Paragraph>Catch Phrase</Paragraph>
                            <Title>{user.company && user.company.catchPhrase}</Title>
                            
                            <Paragraph>Broadcasting</Paragraph>
                            <Title>{user.company && user.company.bs}</Title>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>

        </>
    )
}

export default UserDetail