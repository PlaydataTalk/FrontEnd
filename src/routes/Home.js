import { authService } from "fbase";
const Home = () => {
    const onLogOutClick = () => {
        authService.signOut()
    }
    const deleteAccount = () => {
        authService.currentUser.delete()
    }
    return (
        <>
            <button onClick={onLogOutClick}>
                Logout
            </button>
            <button onClick={deleteAccount}>
                회원탈퇴
            </button>
        </>
    );
};
export default Home;