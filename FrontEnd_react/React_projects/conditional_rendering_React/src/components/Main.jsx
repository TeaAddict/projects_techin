import { useState } from "react";
import ProfileButtons from "./ProfileButtons";
import AdminPanel from "./AdminPanel";
import UserDashboard from "./UserDashboard";
import GuestPage from "./GuestPage";
import Notification from "./Notification";
import SchoolForm from "./SchoolForm";
import Modal from "./Modal";
import TabbedContent from "./TabbedContent";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState("admin");
  const [tasks, setTasks] = useState(["😊", "👌", "👍", "🙌"]);
  const [isOpen, setIsOpen] = useState(false);

  const featureFlags = {
    newFeature: true,
    deprecatedFeature: true,
  };

  return (
    <div className="main">
      {/* 1., 2. */}
      {isLoggedIn && !isLoading && <p>Welcome, User!</p>}
      {!isLoggedIn && !isLoading && <p>Please log in</p>}
      {isLoading && <p>Loading...</p>}

      {/* 3. */}
      {isLoggedIn || <ProfileButtons />}

      {/* 4. */}
      {userRole == "admin" && <AdminPanel />}
      {userRole == "user" && <UserDashboard />}
      {userRole == "" && <GuestPage />}

      {/* 5. */}
      {tasks ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={task + index}>{task}</li>
          ))}
        </ul>
      ) : (
        "No tasks available"
      )}

      {/* 6. */}
      <Notification type={"success"} />

      {/* 7. */}
      <SchoolForm userType={"student"} />

      {/* 8. */}
      <Modal isOpen={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close modal" : "Open modal"}
      </button>

      {/* 9. */}
      <TabbedContent />

      {/* 10. */}
      {featureFlags.newFeature && <p>New Feature!</p>}
      {featureFlags.deprecatedFeature && <p>Deprecated Feature</p>}
    </div>
  );
};

export default Main;
