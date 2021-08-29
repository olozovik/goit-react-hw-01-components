import { Wrapper } from './components/Wrapper/Wrapper';
import { SocialProfile } from './components/SocialProfile/SocialProfile';
import userData from './user.json';
import { Statistics } from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export function App() {
  return (
    <Wrapper>
      <SocialProfile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Wrapper>
  );
}
