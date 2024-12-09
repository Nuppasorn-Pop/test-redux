// กำหนด type ของสินค้า
export interface CartItem {
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    quantity: number,
    total: number
} 

// กำหนด type ของ state
export interface CartState {
    items: CartItem[]; 
    totalAmount: number;
    isActive: boolean;
    isConfirm: boolean
}