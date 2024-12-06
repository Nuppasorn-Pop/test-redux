import { CardProduct } from "../components/CardProduct";
import dataProduct from "../../data.json";
import { motion } from "framer-motion";

export default function LeftSide() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      <div className="text-header">Desserts</div>
      <div className="row w-100 flex-grow-1">
        {dataProduct.map((item, index) => (
          <div className="col-12 col-md-6 col-xl-4 mb-4" key={index}>
           <motion.div
      initial={{ y: 100, opacity: 0 }} // เริ่มจากล่าง (y: 100)
      animate={{ y: 0, opacity: 1 }}   // เลื่อนไปตำแหน่งปกติ (y: 0)
      transition={{ type: "spring", stiffness: 50, damping: 40 }}
     
    >
            <CardProduct
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
              productId={item.id}
            />
          </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
