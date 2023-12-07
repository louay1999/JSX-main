import './App.css';
import ProductCard from './Component/Card';
function App() {
  const Name = " ibrahim"
  return (
    <div className="App">
      <ProductCard/>
      <h2>
        hello 
        {(Name===""?" there": Name)}
      
      </h2>
      {Name?<img  src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="logo"/>:""}
    </div>
  );
}

export default App;
