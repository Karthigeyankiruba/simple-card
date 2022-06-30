
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
function App() {
  let products = [
    {
      title:'Iphone',
      price: 10000
    },
    {
      title:'Samsung',
      price: 20000
    },
    {
      title:'Redmi',
      price: 30000
    },
    {
      title:'One Plus',
      price: 40000
    }
  ]
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
        {
          products.map((product) => {
            return <Card title = {product.title} price = {product.price} />
          })

          }
        
        </div>
      </div>
    </div>
  );
}

export default App;
