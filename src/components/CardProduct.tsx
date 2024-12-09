import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slice/cart-slice";
import { RootState } from "../store";


interface CardProductProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  productId: number
}

export const CardProduct: React.FC<CardProductProps> = ({
  image,
  name,
  category,
  price,
  productId
}) => {
  const [activeName, setActiveName] = useState<string | null>(null);
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItemToCart({id:productId ,name,category,price, image:image.desktop , quantity: 1, total:price}))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(productId))
  }

  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === productId)
    return item ? item.quantity : 0
  })

  return (
    <div className="bg-custom1 d-flex flex-column gap-2">
      <div className="position-relative image-custom">
        <div className={`animated-border ${activeName ? "active" : "exit"}`} />
        <img src={image.desktop} alt={image.desktop} />
        <div className="position-absolute bottom-0 start-0 w-100 z-1">
          <div className="d-flex justify-content-center">
            <button
              className={`btn-custom ${activeName ? "active" : "exit"}`}
              tabIndex={0}
              onFocus={() => setActiveName(name)}
              onBlur={() => setActiveName(null)}
            >
              {activeName === name ? (
                <div>
                  <div role="button" onClick={handleRemoveFromCart}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="2"
                        fill="none"
                        viewBox="0 0 10 2"
                      >
                        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                      </svg>
                    </div>
                  </div>
                  <div>{quantity}</div>
                  <div role="button"  onClick={handleAddToCart}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#fff"
                          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <g fill="#C73B0F" clipPath="url(#a)">
                      <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                      <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M.333 0h20v20h-20z" />
                      </clipPath>
                    </defs>
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-category">{category}</div>
        <div className="text-name">{name}</div>
        <div className="text-price">${price.toFixed(2)}</div>
      </div>
   
    </div>
  );
};
