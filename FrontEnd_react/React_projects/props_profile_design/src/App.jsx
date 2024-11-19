import "./App.css";
import Profile from "./components/Profile";
import Stats from "./components/Stats";

function App() {
  const data = {
    username: "Ambre Dubois",
    tag: "adubois",
    location: "Valensole, France",
    avatar: "https://picsum.photos/id/64/250/250",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  return (
    <>
      <div>
        <Profile
          avatar={data.avatar}
          username={data.username}
          tag={data.tag}
          location={data.location}
        />
        <Stats stats={data.stats} />
      </div>
    </>
  );
}

export default App;
