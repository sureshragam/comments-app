// Write your code here
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './index.css'

const CommentItem = params => {
  const {
    id,
    name,
    comment,
    color,
    deleteComment,
    isLiked,
    onLiked,
    date,
  } = params
  const onDel = () => {
    deleteComment(id)
  }
  const onLike = () => {
    onLiked(id)
  }
  const profileStyle = `profile ${color}`
  const time = formatDistanceToNow(date)

  return (
    <li>
      <div className="row1">
        <div className={profileStyle}>
          <p className="logo">{name.charAt(0).toUpperCase()}</p>
        </div>
        <div>
          <div className="time-tab">
            <h1 className="name">{name}</h1>
            <p>{time}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="row2">
        <button className="like-tab" type="button" onClick={onLike}>
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          )}
          {isLiked ? <p>Liked</p> : <p>Like</p>}
        </button>
        <button type="button" onClick={onDel} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
