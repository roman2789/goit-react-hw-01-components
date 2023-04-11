import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend/FriendList';
import userData from 'user.json';
import statsData from 'dataStat.json';
import friendsData from 'friendsData.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
    </div>
  );
};
