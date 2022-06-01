import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper';
import { View, ScrollView } from 'react-native'

const PostDetail = (props) => {

    const navigation = props.navigation;
    const post = props.post;

    return (
        <>
            <ScrollView>
                <Card>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Title>{post.title}</Title>
                        <Title style={{marginHorizontal: 20, marginVertical: 20}}>{post.body}</Title>
                    </Card.Content>
                </Card>
            </ScrollView>

        </>
    )
}

export default PostDetail