import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { BiLike } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

export default ({ userObj }) => {

const stat = useParams();

class ProfileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: [],
            userId: userObj.userId,
            user: {},
            name: ""
        }

        this.changeMailHandler = this.changeMailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);

    }

    componentDidMount() {
        BoardService.goProfile(this.state.userId).then((res) => {
            console.log(stat);
            this.setState({ boards: res.data.reverse() });

        });

        BoardService.getUser(this.state.userId).then((res) => {
            this.setState({user: res.data});
            this.setState({name: res.data.name });

        });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    changeMailHandler = (event) => {
        this.setState({ userId: event.target.value })
    }

    profileEdit() {
        window.location.replace("edit")
    }

    render() {
        return (
            <div>

                <div style={{ paddingTop: "5%" }} />
                {stat.stat === '_profile' ?
                    <div className='profileMainForm'>
                        <img className='profileBoxImg' src={'../assets/yoo.jpeg'} alt='imgs' />
                        <div className='profileContent'>
                            <div>닉네임 : {this.state.user.name}</div>
                            <div>이메일 : {this.state.userId}</div>
                        </div>
                        <button className='profileButton' onClick={() => this.profileEdit()}>프로필 수정</button>
                    </div>
                    :
                    <div className='profileMainForm'>
                        <img className='profileBoxImg' src={'../assets/yoo.jpeg'} alt='imgs' />
                        <div className='profileContent'>
                            <div>닉네임 : <input name="name" value={this.state.name} onChange={this.changeNameHandler}/></div>
                            <div>이메일 : <input name="mail" value={this.state.userId} onChange={this.changeMailHandler}/></div>
                           
                            
                           
                        </div>
                        <button className='profileButton'>저장</button>
                    </div>
                }
                <hr></hr>
                <div className='profileFeedForm'>
                    <div className="row">
                        {
                            this.state.boards.map(
                                board => 
                                    <div className='feed' key={board.postId} style={{ marginTop: "20px" }}>
                                        <div style={{ marginLeft: "50px" }}>
                                            <img className='profileBox' src={"../" + board.userId.imgUrl} alt='imgs' />
                                            <br />
                                            <div className='App'>
                                                {board.userId.name}
                                            </div>
                                        </div>
                                        <div className='letterBox'>
                                            <div>{board.text}</div>
                                            <div style={{ marginLeft: "auto" }}>{board.createDate}</div></div>
                                        <div><BiLike size={50} />10</div>
                                    </div>
                            )
                        }
                    </div>
                </div>
                <hr />

            </div>
        );
    }
}
return <ProfileComponent className="r"></ProfileComponent>
}
