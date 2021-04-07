import './App.css';
import Basket from './Components/Basket/Basket';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import data from './Data/Data';
import {useState} from 'react';

function App() {
  const {products}=data;
  const [cartItems, setcartItems] = useState([])

  // FUNCTION TO ADD ITEMS

  const onItemAdd=(product)=>{
      const exist=cartItems.find(x=>x.id===product.id);
      if(exist){
        setcartItems(cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty+1}:x));
      }
      else{
        setcartItems([...cartItems,{...product,qty:1}])
      }
  }

  //FUNCTION TO REMOVE ITEMS
  const onItemRemove=(product)=>{
      const exist=cartItems.find(x=>x.id===product.id);
      if(exist.qty===1){
        setcartItems(cartItems.filter((x)=>x.id!==product.id));
      }
      else{
         setcartItems(cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty-1}:x));
      }
  }

  return (
    <div className="App">
      <Header/>
      <div className="row">
        <Main onItemAdd={onItemAdd} products={products}/>
        <Basket  onItemAdd={onItemAdd} onItemRemove={onItemRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
