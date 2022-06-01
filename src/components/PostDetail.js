import React from 'react'
import { Appbar, Card, Title } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native'

const PostDetail = (props) => {

    const navigation = props.navigation;
    const post = props.post;

    const onPressGoBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <ScrollView>
                <Appbar.Header style={{ backgroundColor: '#f1c40f' }}>
                    <Appbar.BackAction onPress={() => onPressGoBack() }/>
                    <Appbar.Content title={post.title} />
                </Appbar.Header>
                <Card>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Title>{post.title}</Title>
                        <Title style={styles.body}>{post.body}</Title>
                    </Card.Content>
                </Card>
            </ScrollView>
        </>
    )
}

export default PostDetail

const styles = StyleSheet.create({
    body: { 
        marginHorizontal: 20,
        marginVertical: 20 
    }
})