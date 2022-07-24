import LoginButton from 'components/auth/login'
import LogoutButton from 'components/auth/logout'
import GetTokenbutton from 'components/auth/token'
import ProfileView from 'views/user/profile'
import './App.css';

function App() {
  return (
    <div>
      <GetTokenbutton/>
      <LoginButton />
      <LogoutButton />
      <ProfileView />
    </div>
  );
}

export default App;
