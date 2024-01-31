import './App.css';
import UserList from './Component/UserList';
import Product from './Component/Product';
function App() {
  return (
    <div className="App">
      {/* Render an instance of UserList component */}
      <UserList />
      {/* Product component instance render */}
      <Product/>
      
    </div>
  );
}

export default App;
