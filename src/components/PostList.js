import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper';

const PostList = (props) => {

    const navigation = props.navigation;
    const posts = props.posts.slice(1, 21);;


    const Item = ({ post }) => (
        <>
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("PostDetail", { postId: post.id })}>
                    <Card>
                        <Card.Content style={{ alignItems: 'center' }}>
                            <Title style={styles.title}>{post.title}</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>


        </>
    );

    const renderUser = ({ item }) => (
        <Item post={item} />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    renderItem={renderUser}
                    keyExtractor={item => item.id}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        justifyContent: 'center'
    },
    title: {
        paddingBottom: 16,
    }
    ,
    item: {
        marginVertical: 8,
        marginHorizontal: 16
    }
});

export default PostList