import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import statsData from '../data/dataStat.json';
import friendsData from '../data/friendsData.json';
import transactions from '../data/transactions.json';

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
      <TransactionHistory items={transactions} />
    </div>
  );
};
