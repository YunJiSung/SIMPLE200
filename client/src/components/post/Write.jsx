import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Image from './Image';


const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");


    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === "" || content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            image: image
        }

        axios
            .post("/api/post/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/list");
                } else {
                    alert("글 작성이 실패하였습니다.")
                }
            })
    }

    return (
        <div className='login__Wrap'>
            <div className='login__header'>
                <h2>
                    Write
                </h2>
                <p>게시글을 작성해주세요.</p>
            </div>
            <form className="login__form" action='' name='loginSave' method='post'>
                <fieldset>
                    <legend className='blind'>글쓰기 영역</legend>
                    <div className='login__input'>
                        <label htmlFor='youName' className='blind'>제목</label>
                        <input type='text' value={title} id='youName' name='youName' placeholder='제목을 입력해주세요' onChange={(e) => setTitle(e.currentTarget.value)} />
                    </div>
                    <div className='login__input'>
                        <label htmlFor='youEmail' className='blind'>내용</label>
                        <textarea id='youCont' value={content} placeholder='내용을 입력해주세요.' onChange={(e) => setContent(e.currentTarget.value)} />
                    </div>
                    <Image setImage={setImage} />
                    <button type='submit' className='login__btn' onClick={(e) => onSubmit(e)} >작성하기</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Write