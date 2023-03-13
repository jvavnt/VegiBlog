import { CartState } from "../context/Context"
import Filters from "./Filters"
import Singleproduct from "./Singleproduct"
import "./style.css"
const Home = () => {

const {state: {products}} =  CartState()

console.log(products)
  return <div className="home">
  <Filters/>
    <div className="productContainer">
        {
          products.map((prod)=>{
             return <Singleproduct prod={prod} key={prod.id} />
          })        
        }
    </div>
  </div>
}

export default Home