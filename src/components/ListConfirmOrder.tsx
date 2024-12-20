

interface ProductProps {
    name: string;
    price: number;
    amount: number;
    quantity: number;
    image: string
  }

export const ListConfirmOrder:React.FC<ProductProps> = ({name, price,amount,quantity,image}) => {
 
  return (
    <div>
    <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
            <div className="image-small"><img src={image} alt={image}/></div>
            <div className="d-flex flex-column justify-content-between py-2">
            <div className="text-cart-name">{name}</div>
                <div className="d-flex gap-3 align-items-center">
                    <div className="text-cart-price">{quantity}x</div>
                    <div className="text-category">@${price.toFixed(2)}</div>
                </div>
            </div>
        </div>
        <div className="text-category fw-bold">${amount.toFixed(2)}</div>
    </div>
        <hr className="mx-auto" style={{width: "100%", height: "1px"}}/>
    </div>
  )
}

