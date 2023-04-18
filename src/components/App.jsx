import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import statsData from '../data/dataStat.json';
import friendsData from '../data/friendsData.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData}></FriendList>
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
