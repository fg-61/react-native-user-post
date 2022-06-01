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
                <Appbar.Header style={styles.header}>
                    <Appbar.BackAction onPress={() => onPressGoBack() }/>
                    <Appbar.Content title={post.title} />
                </Appbar.Header>
                <Card>
                    <Card.Content style={styles.content}>
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
    },
    header: {
        backgroundColor: '#f1c40f'
    },
    title: {
        alignItems: 'center' 
    },
    content: {
        alignItems: 'center' 
    }
})