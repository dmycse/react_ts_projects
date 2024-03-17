import { Stack,  Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

function CartItem({id, quantity}: CartItemProps) {

  let { removeFromCart} = useShoppingCart();
  let item = storeItems.find(i => i.id === id);
  if (!item) return null
   
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img  src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
      <div className="me-auto">
        <div>
          {item.name}{" "} 
          {quantity > 1 && 
            <span className="text-muted" style={{fontSize: "0.65rem"}}> 
              x{quantity}
            </span>
}          <div className="text-muted" style={{fontSize: "0.75rem"}}>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem