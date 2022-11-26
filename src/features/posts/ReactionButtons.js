import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕' 
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
  return (
    <div>
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
      >
        {emoji} {post.reactions[name]}
      </button>
    </div>
  )
})
return(
    <div>
        {reactionButtons}
    </div>
)
}

export default ReactionButtons;
