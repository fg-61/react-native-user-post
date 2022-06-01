import React from 'react'
import PostListScreen from '../screens/PostScreen/PostListScreen';
import PostDetailScreen from '../screens/PostScreen/PostDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PostPageStack = createNativeStackNavigator();

const PostStackScreen = () => {
    
    return (

        <PostPageStack.Navigator screenOptions={{ headerShown: false }}>

            <PostPageStack.Screen name="Post" component={PostListScreen} />
            <PostPageStack.Screen name="PostDetail" component={PostDetailScreen} />

        </PostPageStack.Navigator>
    )
}

export default PostStackScreen