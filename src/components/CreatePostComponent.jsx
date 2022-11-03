import React, { Component } from 'react';
import BoardService from '../service/BoardService';

export default ({ userObj }) => {

class CreatePostComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: this.props.match.params.postId,
            text: '',
            keyword: '',
            userId: 'abc@gmail.com',
            keywordConfirm: /^#[\w가-힣]/
        }

        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.changeKeywordHandler = this.changeKeywordHandler.bind(this);
        this.createBoardSuccess = this.createBoardSuccess.bind(this);
        this.createBoardFail = this.createBoardFail.bind(this)

    }

    componentDidMount() {
        if (this.state.postId === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.postId).then( (res) => {
                let board = res.data;
                console.log("board => "+ JSON.stringify(board));
                
                this.setState({
                        text: board.text,
                        keyword: board.keyword
                    });
            });
        }
    }

    changeTextHandler = (event) => {
        this.setState({ text: event.target.value });
    }
    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
    }


    createBoardSuccess = (event) => {
        console.log(this.state.keywordConfirm.test(this.state.keyword));
        event.preventDefault();
        let post = {
            text: this.state.text,
            keyword: this.state.keyword.match(/#[\w가-힣]+/g).toString()
        };
        let test = {
            post: post,
            userId: this.state.userId
        }

        if (this.state.postId === '_create') {
            BoardService.createPost(test).then(res => {
                this.props.history.push('/main')
            });
        }
        else {
            BoardService.updatePost(this.state.postId, test).then(res => {
                this.props.history.push('/main')
            });
        }

    }
    createBoardFail = (event) => {
        alert("키워드를 다시 작성해주세요.")
    }

    createKeyword = (event) => {
        event.preventDefault();
        let text = "text=" + this.state.text;
        BoardService.createKeyword(text).then(res => {
            console.log(res.data);
            this.setState({ keyword: res.data.message.toString() });
        })
    }

    cancel() {
        this.props.history.push('/main');
    }

    render() {
        return (
            <div>
                <div className="createPost1" >
                    <div className="row">
                        <div className="">{this.state.postId === '_create'?
                            <h3 style={{ fontFamily: "postFont" }} className="text-center">새로운 글을 작성해주세요</h3>
                            :<h3 style={{ fontFamily: "postFont" }} className="text-center">글을 수정해주세요</h3>
                        }
                            <div className="createPost">
                                <form>
                                    <div className="form-group">
                                        <label> Text  </label>
                                        <textarea placeholder="내용을 입력해주세요." name="text" className="textForm"
                                            value={this.state.text} onChange={this.changeTextHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Keyword </label>
                                        <button className="createButton" onClick={this.createKeyword} style={{ marginLeft: "10px" }}>키워드 추천</button>
                                        <input placeholder="원하는 키워드를 입력해주세요.(최대 3개)    예시) #날씨,#태풍" name="keyword" className="keywordForm"
                                            value={this.state.keyword} onChange={this.changeKeywordHandler} />
                                    </div>
                                    <button className="createButton" onClick={this.state.keywordConfirm.test(this.state.keyword) ? this.createBoardSuccess : this.createBoardFail}>저장</button>
                                    <button className="createButton" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
return <CreatePostComponent className="r"></CreatePostComponent>
}