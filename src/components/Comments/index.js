import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const id = uuidV4()
    const isLiked = false
    const date = new Date()
    const num = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const background = initialContainerBackgroundClassNames[num]

    const newComment = {name, comment, id, isLiked, background, date}

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => {
      const updatedList = prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      )
      return {commentsList: updatedList}
    })
  }

  onLiked = id => {
    this.setState(prevState => {
      const updatedCommentsList = prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      })
      return {commentsList: updatedCommentsList}
    })
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentsCount = commentsList.length

    return (
      <div className="main-container">
        <h1 className="heading">Comments</h1>
        <div className="field-row">
          <div className="col-1">
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onComment}>
              <input
                id="InputName"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                id="Comment"
                rows="8"
                cols="38"
                placeholder="your Comment"
                value={comment}
                onChange={this.onChangeComment}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div className="col-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="hr" />
        <div className="comment-row">
          <p className="comment-count">
            <span>{commentsCount}</span>Comments
          </p>
          {commentsList.length === 0 ? null : (
            <ul className="comment-sub-row">
              {commentsList.map(eachComment => (
                <CommentItem
                  name={eachComment.name}
                  comment={eachComment.comment}
                  id={eachComment.id}
                  key={eachComment.id}
                  deleteComment={this.onDelete}
                  color={eachComment.background}
                  isLiked={eachComment.isLiked}
                  onLiked={this.onLiked}
                  date={eachComment.date}
                />
              ))}
            </ul>
          )}
        </div>
        )
      </div>
    )
  }
}

export default Comments
