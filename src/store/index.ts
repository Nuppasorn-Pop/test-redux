import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart-slice.js"


const store = configureStore({
    reducer: {
        cart: cartReducer 
    }
})

// กำหนด RootState สำหรับการใช้งาน (ใช้กับ typeScript)
// เป็นการประกาศ ชนิดข้อมูล (Type) ที่เกี่ยวข้องกับ Redux Store เพื่อช่วยให้ TypeScript สามารถตรวจสอบชนิดข้อมูลในโปรเจกต์ได้
export type RootState = ReturnType<typeof store.getState> // ดึงชนิดข้อมูล state ทั้งหมดใน Redux Store มาใส่ใน RootState ไว้ใช้อ้างอิง
export type AppDispatch = typeof store.dispatch // เป็นเมธอดที่ใช้ใน Redux Store เพื่อส่ง (dispatch) action ไปยัง reducer โดย typeof จะดึงชนิดข้อมูลของ store.dispatch ดังนั้น AppDispatch เป็นชนิดข้อมูลที่คุณสามารถใช้เพื่ออ้างอิง dispatch
 
export default store