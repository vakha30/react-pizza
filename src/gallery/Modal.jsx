import React from 'react'

function Modal({ data, onClose, addComment }) {
    const textRef = React.useRef()

    const handleClick = () => {
        addComment(textRef.current.value)
        textRef.current.value = ""
    }

    return (
        <div className="modal-image-wrap">
            <div className="modal-image">
                <div className="image">
                    <img src={data.url} alt="" />
                </div>
                <div className="comments">
                    {data.comments &&
                        data.comments.map((item, index) =>
                            <div
                                key={index}
                                className="comment"
                            >
                                <span>12.30.2021</span>
                                <p>{item.text}</p>
                            </div>
                        )
                    }
                </div>
                <button onClick={onClose}>CLOSE</button>
            </div>
            <div className="modal-input">
                <div>
                    <input 
                    type="text" 
                    placeholder="Напишите комментарий..."
                    ref={textRef}
                    />
                </div>
                <button onClick={handleClick} className="button">Добавить</button>
            </div>
        </div>
    )
}

export default Modal
