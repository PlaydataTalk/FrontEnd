import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { BiLike } from 'react-icons/bi';

export default ({ userObj }) => {

    class ListPostComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                boards: [],
                userId: userObj.userId
            }

            this.createPost = this.createPost.bind(this);
        }

        componentDidMount() {
            BoardService.getBoards().then((res) => {
                console.log(res.data);
                console.log("현재 접속 중인 회원 ID : "+this.state.userId)
                this.setState({ boards: res.data.reverse() });
            });
        }

        ilikeCount(board) {
            const bucket = this.state.boards;
            const indexNo = bucket.indexOf(board);
            bucket[indexNo].userId.name = "박나래";
            this.setState({ boards: bucket });
        }

        createPost() {
            this.props.history.push('/create-post/_create');
        }

        updatePost(postId) {
            this.props.history.push(`/create-post/${postId}`);
        }

        // # 3.
        render() {
            return (
                <div>
                    <div style={{ paddingTop: "20px" }}>
                        <button className="createButton" onClick={this.createPost}> 글쓰기</button>
                    </div>
                    <div className="row">
                        {
                            this.state.boards.map(
                                board =>
                                    <div className='feed' key={board.postId} style={{ marginTop: "20px" }}>
                                        <div style={{ marginLeft: "50px" }}>
                                            <img className='profileBox' src={board.userId.imgUrl} alt='imgs' />
                                            <br />
                                            <div className='App'>
                                                {board.userId.name}
                                            </div>
                                            <div className='replyButton' onClick={() => this.updatePost(board.postId)}>수정</div>
                                        </div>
                                        <div className='letterBox'>
                                            <div>{board.text}</div>
                                            <div className='keywordTest'>
                                                <div>{board.keyword}</div>
                                                <div style={{ marginLeft: "auto" }}>{board.createDate}</div>
                                            </div>
                                        </div>
                                        <div>{board.userId.name === '박나래' ? <BiLike style={{ cursor: "pointer" }} size={50} color="red" onClick={() => this.ilikeCount(board)} /> : <BiLike style={{ cursor: "pointer" }} size={50} color="blue" onClick={() => this.ilikeCount(board)} />}110</div>
                                    </div>
                            )
                        }
                    </div>
                    <div style={{ height: "70px" }}></div>
                </div>
            );
        }
    }

    return <ListPostComponent className="rend"></ListPostComponent>;
}
