import * as React from 'react';
import { UserAuthContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { useNavigate, Link } from 'react-router-dom'
import AuthApi from '../helper/AuthApi';
import ShowPoll from './ShowPoll';

const Home = () => {
  const [Polls, setPolls] = React.useState([]);
    const Navigate = useNavigate();
    const Logout = () => {
      AuthApi.post("/logout")
      .then(() => {
        const cookie = new Cookies();
        cookie.remove("token", { path: "/" });
        Navigate("/login");
      });
  };
  
 React.useEffect(() => {
    AuthApi.get("/poll")
      .then((response) => {
        setPolls(response.data.data)
      })
  
  }, []);

    const { user } = React.useContext(UserAuthContext);
    return (
      <div>
        <p>hello {user.username}</p>
        <Link to="/create-poll">Create Poll</Link>
        {Polls.length > 0 ? (
          Polls.map((item, index) => (
            <ShowPoll
              key={index}
              title={item.title}
              description={item.description}
              poll_id={item.id}
            />
          ))
        ) : (
          <p>No polls available</p>
        )}
      </div>
    );
}

export default Home;
