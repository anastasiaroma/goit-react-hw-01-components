import profile from './user.json';
import Profile from './components/Profile/Profile';

import friends from './friends.json';
import FriendList from './components/Friend/FriendList';

import statisticalData from './statistical-data.json';
import StatList from './components/Statistics/Statistics';

import transaction from './transactions.json';
import TransactionHistory from './components/Transaction/Transaction';


export default function App() {
  const {avatar, name, tag, location, stats} = profile;
 
  return(
    <> 
   <Profile
avatar={avatar} 
name={name}
tag={tag}
location={location}
statsFollowers={stats.followers}
statsViews={stats.views}
statsLikes={stats.likes}
  /> 
   
<FriendList 
friendListItems={friends} 

/>

<StatList title="Upload stats" stats={statisticalData} />
<StatList stats={statisticalData} />

<TransactionHistory items={transaction} />
   </>
  )
}