import { useState } from "react";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES, CORE_CONCEPTS } from "./data-with-examples";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = <div className="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => {
              return <CoreConcept key={item.title} {...item} />
            })}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={selectedTopic === "components"}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic === "jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic === "props"}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === "state"}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
