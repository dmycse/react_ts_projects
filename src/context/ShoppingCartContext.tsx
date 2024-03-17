import { useState } from 'react';
import { ReactNode, createContext, useContext} from 'react';
import ShoppingCart from '../components/ShoppingCart';
import useLocalStorage from '../hooks/useLocalStorage';

interface ShoppingCartProviderProps {
  children: ReactNode
}

type CartItem = {
  id: number;
  quantity: number;
}

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);


export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {

  let [isOpen, setIsOpen] = useState(false);
  let [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  let getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0;

  let increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (!currItems.find(item => item.id === id)) {
        return [...currItems, {id, quantity: 1}]
      } else {
          return currItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
      }
    })
  };

  let decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id )
      } else {
          return currItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
      }
    })
  };

  let removeFromCart = (id: number) => setCartItems(currItems => currItems.filter(item => item.id !== id));

  let cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  let openCart = () => setIsOpen(true);
  let closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider 
      value={{
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}

