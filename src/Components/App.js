import React from "react";
import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import Statistics from "./statistics/Statistics";
import user from "./data/user.json";
import statisticalData from "./data/statisticalData.json";
import transactions from "./data/transactions.json";
import friends from "./data/friends.json";




const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
