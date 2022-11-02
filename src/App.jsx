import { useState } from "react";
import "./App.css";
import user from "./user.json";

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1 className="title">About me</h1>
      </header>
      <section className="summery">
        <p> Hi to all&#128075;</p>
        <p>
          My name is Anna. I am a 4th year student at the State University of Telecommunications.
          Specialty: software engineering. Out of all the IT fields, I like web development. I have
          been studying this direction for about 6 months. In my spare time I like to read (mainly
          fantasy)
        </p>
      </section>
      <section className="hobbies">
        <h2 className="title">Hobbies</h2>
        <ul>
          {user.hobbies.map((hobbies) => (
            <li key={hobbies}>{hobbies}</li>
          ))}
        </ul>
      </section>
      <section className="experience">
        <h2 className="title">Experience</h2>
        <p>Experience: {user.experience}</p>
      </section>
    </main>
  );
}

export default App;
