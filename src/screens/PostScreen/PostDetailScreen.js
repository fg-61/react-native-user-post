import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseManager from '../../api/baseManager';
import PostDetail from '../../components/PostDetail';

const PostDetailScreen = ({ navigation, route }) => {

    const [post, setPost] = useState([]);
    const { postId } = route.params;

    useEffect(() => {
        getPostById(postId);
    }, []);

    const getPostById = (postId) => {
        baseManager.getEntityById('/posts', postId)
            .then((data) => {
                setPost(data);
            })
    };

    return (
        <View style={{ flex: 1 }}>
            <PostDetail post={post} navigation={navigation} ></PostDetail>
        </View>
    )
}

export default PostDetailScreen