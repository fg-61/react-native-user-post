import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseManager from '../../api/baseManager';
import PostList from '../../components/PostList';

const PostListScreen = ({ navigation }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    baseManager.getAll('/posts')
      .then((data) => {
        setPosts(data);
      })
  };

  return (
    <View style={{ flex: 1 }}>
      <PostList posts={posts} navigation={navigation}></PostList>
    </View>
  )
}

export default PostListScreen