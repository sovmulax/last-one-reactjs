import { useState } from "react";

const Home = () => {
  const [name, setName] = useState('evane')
  const ClickHandle = () => {
    console.log("You just click on Me");
    setName('geo')
  };

  const ClickAgainHandle = (name) => {
    console.log("hello "+name)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={ClickHandle}>Click Me { name }</button>
      <button onClick={() => {ClickAgainHandle('evane')}}>Click Me</button>
    </div>
  );
};

export default Home;
