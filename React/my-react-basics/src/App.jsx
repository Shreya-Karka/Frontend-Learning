import "./App.css";
import ProfileCard from "./components/Props/ProfileCard";
import WelcomeMessage from "./components/JSX/WelcomeMessage";
import BookInfo from "./components/JSX/BookInfo";
import SimpleCalculator from "./components/JSX/SimpleCalculator";
import ProductCard from "./components/Props/ProductCard";
import TeamMemberCard from "./components/Props/TeamMemberCard";
import ScoreCard from "./components/Props/ScoreCard";
import TextInput from "./components/StatesAndEvents/TextInput";
import InteractiveCounter from "./components/StatesAndEvents/InteractiveCounter";
import ToggleSwitch from "./components/StatesAndEvents/ToggleSwitch";
import ColorPicker from "./components/StatesAndEvents/ColorPicker";
import SimpleToDoList from "./components/ListsAndConditionalRendering/SimpleToDoList";
import UserListFilter from "./components/ListsAndConditionalRendering/UserListFilter";
import RegistrationForm from "./components/FormsAndInputHandling/RegistrationForm";
import ContactForm from "./components/FormsAndInputHandling/ContactForm";
import LiveClock from "./components/UseEffect/LiveClock";
import AutoSaveNotes from "./components/UseEffect/AutoSaveNotes";
import WindowSizeTracker from "./components/UseEffect/WindowSizeTracker";
import RandomDog from "./components/APIIntegrationAndDataFetching/RandomDog";
import UserList from "./components/APIIntegrationAndDataFetching/UserList";
import GithubSearch from "./components/APIIntegrationAndDataFetching/GithubSearch";

function App() {
  return (
    <div className="App">
      <h1>🚀 React Props Practice</h1>
      <section>
        <h2>👥 Team Profiles</h2>

        <div className="card">
          <ProfileCard
            fName="Shreya"
            lName="Karka"
            jobRole="Software Developer"
            emailID="shreyakarka@gmail.com"
            loc="Denton"
            image="https://i.pravatar.cc/150?img=5"
            bio="Developer with AI knowldge and Hobbies of Drawing and playing badmintton"
          />
          <ProfileCard
            fName="Manu"
            lName="Reddy"
            jobRole="BIM Modeller"
            emailID="reddymanu78@gmail.com"
            loc="Denton"
            image="https://i.pravatar.cc/150?img=11"
            bio="Developer with AI knowldge and Hobbies of Drawing and playing badmintton"
          />
          <ProfileCard
            fName="Praneeth"
            lName="Suroju"
            jobRole="Software Developer"
            emailID="praneethsuroju@gmail.com"
            loc="Denton"
            image="https://i.pravatar.cc/150?img=12"
            bio="Developer with AI knowldge and Hobbies of Drawing and playing badmintton"
          />
        </div>
      </section>
      <WelcomeMessage />
      <BookInfo />
      <SimpleCalculator />
      <section>
        <h2>Our Products</h2>
        <div className="products">
          <ProductCard
            productName="Electronics item"
            price={500}
            rating={5}
            inStock={false}
            image="https://i.pravatar.cc/150?img=5"
            category="electronics"
          />
          <ProductCard
            productName="Book"
            price={500}
            rating={2}
            inStock={true}
            image="https://i.pravatar.cc/150?img=11"
            category="Books"
          />
          <ProductCard
            productName="CLothing item"
            price={1500}
            rating={3}
            inStock={true}
            image="https://i.pravatar.cc/150?img=12"
            category="Clothing"
          />
          <ProductCard
            productName="Food item"
            price={100}
            rating={5}
            inStock={false}
            image="https://i.pravatar.cc/150?img=3"
            category="Food"
          />
        </div>
      </section>

      <section>
        <h2>Team Profile with skills</h2>
        <div className="team-container">
          <TeamMemberCard
            image="https://i.pravatar.cc/150?img=5"
            name="Jane Doe"
            position="FrontEnd Developer"
            department="Engineering Department"
            skills={["JavaScript", "ReactJS", "CSS", "HTML"]}
            yearsOfExperience={5}
          />

          <TeamMemberCard
            image="https://i.pravatar.cc/150?img=12"
            name="John Smith"
            position="Backend Developer"
            department="Engineering"
            skills={["Python", "Django", "PostgreSQL", "Docker"]}
            yearsOfExperience={6}
          />

          <TeamMemberCard
            image="https://i.pravatar.cc/150?img=20"
            name="Maria Garcia"
            position="UI/UX Designer"
            department="Design"
            skills={["Figma", "Sketch", "Photoshop", "Wireframing"]}
            yearsOfExperience={4}
          />
        </div>
      </section>

      <section>
        <h2>📊 Student Scores</h2>
        <div className="score-container">
          <ScoreCard
            studentName="Shreya"
            subject="React Development"
            score={95}
            grade="A"
            passed={true}
          />

          <ScoreCard
            studentName="Alex"
            subject="JavaScript"
            score={68}
            grade="C"
            passed={true}
          />
        </div>
      </section>
      <TextInput />
      <InteractiveCounter />
      <ToggleSwitch />
      <ColorPicker />

      <section>
        <SimpleToDoList />
      </section>

      <section>
        <UserListFilter />
      </section>

      <section>
        <RegistrationForm />
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
        <LiveClock />
      </section>

      <section>
        <WindowSizeTracker />
      </section>

      <section>
        <AutoSaveNotes />
      </section>

      <section>
        <RandomDog />
        <UserList />
        <GithubSearch />
      </section>
    </div>
  );
}

export default App;
