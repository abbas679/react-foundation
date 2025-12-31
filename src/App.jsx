import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Header title="Dashboard" />
      <UserCard name="Tahir" role="Developer" />
      <UserCard name="Taheer" role="Owner" />
      <Counter />
      <Todo />
      <Footer />
    </>
  );
}

export default App;
