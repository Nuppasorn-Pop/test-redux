import { useDispatch } from "react-redux";
import { removeAllItemFromCart } from "../store/slice/cart-slice";
interface ProductProps {
  name: string;
  price: number;
  amount: number;
  quantity: number;
  productId: number
}


export const ListOrder: React.FC<ProductProps> = ({name, price,amount,quantity,productId}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <div className="text-cart-name">{name}</div>
        <div className="d-flex justify-content-between align-items-start pt-2">
            <div className="d-flex gap-3 flex-grow-1">
                <div className="text-cart-price">{quantity}x</div>
                <div className="text-category">@${price.toFixed(2)}</div>
                <div className="text-category fw-bold">${amount.toFixed(2)}</div>
            </div>
            <div role="button" onClick={()=>dispatch(removeAllItemFromCart(productId))}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></div>
        </div>
        <hr className="mx-auto" style={{width: "100%", height: "1px"}}/>
    </div>
  )
}