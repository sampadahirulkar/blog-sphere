import React from 'react'
import {DiscussionEmbed} from "disqus-react"

const Comments =() => {
    const disqusShortname="blogsphere"
    const disqusConfig = {
        url: "http://localhost:3000/",
        identifier:'123',
        title: 'BlogSphere'
    }
    return(
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config = {disqusConfig}
            />
        </div>
    )
}

export default Comments;

// import React, { createElement, useState } from 'react';
// import { Comment, Avatar, Tooltip } from 'antd';
// import "antd/dist/antd.css";
// import {
//   LikeOutlined, DislikeFilled,
//   DislikeOutlined, LikeFilled
// } from '@ant-design/icons';
  
// export default function App() {
  
//   const [likesCount, setLikesCount] = useState(0);
  
//   const [dislikesCount, setDislikesCount] = useState(0);
  
//   const [action, setAction] = useState(null);
  
//   return (
//     <div style={{
//       display: 'block', width: 700, padding: 30
//     }}>
//       <h4>comment</h4>
//       <Comment
//         author={<a>random</a>}
//         avatar={<Avatar style={{ backgroundColor: 'pink' }}>G</Avatar>}
//         content={
//           <p> 
//            this is a sample comment
//           </p>
  
//         }
//         actions={[
//           <Tooltip title="Like">
//             <span onClick={() => {
//               setLikesCount(1);
//               setDislikesCount(0);
//               setAction('liked');
//             }}>
//               {createElement(action === 'liked' ? 
//               LikeFilled : LikeOutlined)}
//               {likesCount}
//             </span>
//           </Tooltip>,
//           <Tooltip title="Dislike">
//             <span onClick={() => {
//               setLikesCount(0);
//               setDislikesCount(1);
//               setAction('disliked');
//             }}>
//               {React.createElement(action === 'disliked' ? 
//               DislikeFilled : DislikeOutlined)}
//               {dislikesCount}
//             </span>
//           </Tooltip>
//         ]}
//         datetime={'15-07-2023 8:09 PM'}
//       />
//     </div>
//   );
// }