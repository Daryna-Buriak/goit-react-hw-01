import './App.css';

import Profile from './components/profile/Profile';
import FriendsList from './components/friendsList/FriendsList';
import TransactionsHistory from './components/transactions/Transactions';

import userData from './userData.json';
import friendData from './friends.json';
import transactions from './transactions.json';

import clsx from 'clsx';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friend={friendData} />
      <TransactionsHistory items={transactions} />
    </>
  );
}
