import Reviews from "./data"
import Person from "./components/person";


const App = () => {

  return <main>
    <Person reviews={Reviews} />
  </main>;
};
export default App;
