import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <Header title="Dashboard" />
      <UserCard name="Tahir" role="Developer" />
      <UserCard name="Taheer" role="Owner" />
      <Footer />
    </>
  );
}

export default App;
