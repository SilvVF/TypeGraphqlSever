import {LivePost} from "./LivePost";

const activeLfgPosts = new Map<string, LivePost>()
const usersToPostId = new Map<string, string>()


export const joinLfgPost = (userId: string, postId: string) => {

    if (usersToPostId.has(userId)) {
        return false
    }

    const post = activeLfgPosts.get(postId)

    if (post?.isFull()) {
        return false
    }
    return post?.joinPost(userId)
}



