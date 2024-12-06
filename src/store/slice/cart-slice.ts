// ✓add item ==> +1 
// ✓remove item ==> -1
// ✓remove item from cart ==> remove all
// ✓confirm ordered ==> payload desserts orderd
// ✓new ordered ==> reset ordered


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CartState, CartItem} from "../../type/type"

const initialState:CartState ={
    items: [], 
    totalAmount: 0,
    isActive: false,
    isConfirm: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state,action: PayloadAction<CartItem>) => {
            const newItem = action.payload
            const existItem = state.items.find((item) => item.id === newItem.id)

            if(!existItem) {
                state.items.push(
                    {id:newItem.id,
                     name:newItem.name,
                     category:newItem.category,
                     price: newItem.price,
                     image: newItem.image,
                     quantity: 1,
                     total: newItem.price
                    },
                    
                )
                state.isActive = true
            } else {
                // ถ้ามีอยู่แล้วให้เพิ่มจำนวนและปรับ total
                existItem.quantity++
                existItem.total += newItem.price
            }
    
            state.totalAmount += newItem.price
        },

        removeItemFromCart: (state,action: PayloadAction<number>) => {
            const id = action.payload
            const existItem = state.items.find((item) => item.id === id)

            if(existItem) {
                state.totalAmount -= existItem.price

                if (state.items.length === 0) {
                    state.isActive = false; // ถ้าไม่มีสินค้าในตะกร้า active เป็น false
                }

                if(existItem.quantity === 1) {
                     // ถ้าเหลือชิ้นเดียวให้ลบออกจาก array
                     state.items = state.items.filter((item) => item.id !== id);
                } else {
                    // ลดจำนวนและปรับลด total
                    existItem.quantity--
                    existItem.total -= existItem.price
                }

            }
        },

        removeAllItemFromCart: (state, action:PayloadAction<number>) => {
            const id = action.payload
            state.items = state.items.filter((item) => item.id !== id)
        },

        confirmOrdered: (state) => {
        // อาจจะส่งข้อมูลไปหลังบ้านเพื่อเก็บข้อมูล ส่วนนี้เว้นไว้ก่อนเพราะยังไม่ทำหลังบ้าน เป็นการฝึกทำ Redux-toolkit
        // ข้อมูล ordered ทั้งหมดอยู่ใน state แล้ว
            state.isConfirm = true
        },

        newOrdered: (state) => {
            state.items = []
            state.totalAmount = 0
            state.isConfirm = false
            state.isActive = false

        }
        
    }

})

export const {addItemToCart, removeItemFromCart, removeAllItemFromCart, confirmOrdered, newOrdered} = cartSlice.actions // ส่งออก action creators ของ cartSlice
export default cartSlice.reducer //Reducer ที่ส่งออกมานี้ใช้เพื่อลงทะเบียนใน store ของ Redux