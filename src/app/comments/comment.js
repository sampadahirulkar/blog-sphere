import CommentForm from "./commentform";
import { ImUser ,ImReply ,ImPencil ,ImBin } from "react-icons/im";


const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div className="text-slate-950">
    <div key={comment.id} className="comment">
      {/* <div className='text-pink-800'>
        <FaUserAlt />
      </div> */}

      <ImUser />
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            submitLabel-pink-700
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions mx-auto flex flex-row gap-4">
          {canReply && (
            <div
              className="comment-action text-gray-700"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              <ImReply/>

            </div>
          )}
          {canEdit && (
            <div
              className="comment-action text-pink-700"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              <ImPencil/>
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action text-pink-700"
              onClick={() => deleteComment(comment.id)}
            >
              <ImBin/>
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}; 

export default Comment;