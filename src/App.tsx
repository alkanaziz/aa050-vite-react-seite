import skills from './data/skills.json';
import { Header } from "./components/Header";

skills.sort((a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
});

function App() {
  return (
    <main>
      <Header />
    <h2 className="text-xl mt-4 text-yellow-300">{skills.length} Web Developer Skills</h2>
      <ul className="list-disc ml-6">
        {skills.map((skill => {
          return <li><span className="text-orange-400 font-semibold">{skill.name}</span> - {skill.description}</li>;
        }))}
      </ul>
    </main>
  );
}

export default App;
