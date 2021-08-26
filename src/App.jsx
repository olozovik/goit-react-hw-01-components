import SocialProfile from './components/social-profile/SocialProfile';
import userData from './user.json';

function App() {
  return (
    <SocialProfile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />
  );
}

export default App;
