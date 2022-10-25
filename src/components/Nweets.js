import React, { useState } from "react";
import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);

    const onDeleteClick = async () => {

        const ok = window.confirm("삭제 하시겠습니까?");
        if (ok) {
            await deleteDoc(NweetTextRef);
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(NweetTextRef, {
            text: newNweet,

        });
        setEditing(false);
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };
    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="수정 해주세요"
                            value={newNweet}
                            required
                            onChange={onChange}
                        />
                        <input type="submit" value="수정완료" />
                    </form>
                    <button onClick={toggleEditing}>취소</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && (
                        <img src={nweetObj.attachmentUrl} width="50px" height="50px" />
                    )}
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>삭제</button>
                            <button onClick={toggleEditing}>수정</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Nweet;