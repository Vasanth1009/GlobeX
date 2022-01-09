import { Button, Dropdown, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logosvg from '../../assets/svg/logo.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../helpers/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, emptyUser } from '../../stores/userStore';
import { emptyWordCount } from '../../stores/wordCountStore';

function TopBar() {
  const { Header } = Layout;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const googleUser = response.user;
        dispatch(
          addUser({
            name: googleUser.displayName,
            email: googleUser.email,
            userId: googleUser.uid,
            photoURL: googleUser.photoURL,
          })
        );
        window.localStorage.setItem('userId', googleUser.uid);
      })
      .catch((error) => alert(error.message));
  };

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <div
          onClick={() => {
            window.localStorage.removeItem('userId');
            dispatch(emptyUser());
            dispatch(emptyWordCount());
          }}
        >
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header" style={{ position: 'fixed', width: '100%' }}>
      <Link to="/" className="text-3xl font-bold logo">
        <img src={logosvg} alt="logo" />
      </Link>
      <div className="header-button">
        {user ? (
          <Dropdown overlay={menu} placement="bottomCenter">
            <img
              src={`https://ui-avatars.com/api/?size=50&background=0d8bfc&color=fff&rounded=true&name=${user.name}`}
              alt="avatar"
            />
          </Dropdown>
        ) : (
          <Button type="primary" className="button" onClick={login}>
            Login
          </Button>
        )}
      </div>
    </Header>
  );
}

export default TopBar;
