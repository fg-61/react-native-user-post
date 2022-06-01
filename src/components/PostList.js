import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const PostList = (props) => {

    const navigation = props.navigation;
    const posts = props.posts.slice(1, 21);;


    const Item = ({ post }) => (
        <>
            <View style={styles.item}>
                <Button style={styles.title} mode="contained" onPress={() => navigation.navigate("PostDetail", { postId: post.id })}>
                    {post.title}
                </Button>
            </View>
        </>
    );

    const renderPost = ({ item }) => (
        <Item post={item} />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    renderItem={renderPost}
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

export default PostList