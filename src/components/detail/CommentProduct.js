import React, { useState, useEffect, useRef } from 'react';
import { Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { commentProduct, getproductById } from '../../actions/ProductAction';
import {useParams} from 'react-router-dom'

import AllComment from './AllComment';
import { EMOJI_ICON } from '../../constants';
import {SmileOutlined} from '@ant-design/icons'
function CommentProduct(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const allComment = useSelector(state => state.getProductById.product.comments)
  const {userInfo} = useSelector(state => state.userSignin)
  
  const Comment = () => {
    if(userInfo){
      const comment = {
        author: userInfo.name,
        isAdmin: userInfo.isAdmin,
        content: value,
        byUser: userInfo._id,
      }
      console.log(comment)
      dispatch(commentProduct(id, comment))
      setValue('')
    }
    else alert('Đăng nhập đề bình luận đi ông ơi')
  }
  useEffect(() => {
    dispatch(getproductById(id))
  }, [])

  const [showEmoji, setShowEmoji] = useState(false);
  const showEmojiHandler = () => {
    setShowEmoji(!showEmoji);
};

const emojiRef = useRef(null);

const handleOutsideClick = (e) => {
    if (emojiRef.current && !emojiRef.current.contains(e.target)) {
        setShowEmoji(false);
    }
};
const addEmojiHanler = (icon) => {
  const newComment = value + icon.props.children;
  setValue(newComment);
  setShowEmoji(false);
};

    return (
      <div className='comment'>
        <Col span={18} align='start' style={{ alignItems:'center'}} xs={24} sm={24} md={18}>
          <div className="comment-area" style={{display: 'flex', alignItems:'center'}}>
            <textarea placeholder='Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 1h từ 8h - 22h mỗi ngày.' rows={10} cols={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}></textarea>
            <div className="commentTopInputAttach">
                <div className="commentTopInputAttachItem " onClick={showEmojiHandler}>
                    {/* <MoodIcon
                        className="commentTopInputAttachItemBg"
                        // style={{
                        //     backgroundImage: `url("/assets/feed/infoImg.png")`,
                        //     backgroundPosition: '0 -420px',
                        //}}
                    ></MoodIcon> */}
                    <SmileOutlined></SmileOutlined>
                    {showEmoji && (
                        <ul className="commentTopInputAttachEmoji" ref={emojiRef}>
                            {EMOJI_ICON.map((icon, index) => (
                                <li key={index} onClick={() => addEmojiHanler(icon)}>
                                    {icon}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                
              </div>
          </div>
          <div className="comment-send">
            <button onClick={() => Comment()}>Gửi</button>
          </div>
        </Col>

        <AllComment allComment={allComment}></AllComment>
      </div>

    )
}

export default CommentProduct;