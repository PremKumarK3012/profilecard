import "./App.css";

const userData = [
  {
    name: "MAHENDRAN",
    city: "Kalugumalai",
    description: "Software Developer",
    skills: [
      "HTML",
      "CSS",
      "Java Script",
      "React",
      "Tailwind",
      ".NET",
      "Python",
      "C#",
    ],
    online: false,
    profile: "mahi.jpg",
  },
  {
    name: "PREM KUMAR",
    city: "Kalugumalai",
    description: "Software Developer",
    skills: ["HTML", "CSS", "Java Script", "React", "Tailwind", "redux"],
    online: true,
    profile: "card-1.jpeg",
  },
  {
    name: "MUKESH",
    city: "Kalugumalai",
    description: "Mechanical Engineer",
    skills: ["Engineering Design", "Fluid Mechanics", "Applied Mechanics"],
    online: false,
    profile: "mukesh.webp",
  },
];

function User(props) {
  return (
    <div className="container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img " alt="img"></img>
      <h3>{props.name}</h3>
      <h6>{props.city}</h6>
      <p>{props.description}</p>
      <div className="btn">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const App = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          profile={user.profile}
          online={user.online}
        />
      ))}
    </>
  );
};

export default App;
