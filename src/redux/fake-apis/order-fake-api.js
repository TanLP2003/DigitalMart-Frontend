import {v4 as uuid} from "uuid";

export const getOrder = () => {
    return {
        userId: uuid(),
        userName: "James Smith",
        items: [
            {
                product: {
                    id: uuid(),
                    name: "Laptop Asus Vivobook Go 15 E1504FA-NJ454W (AMD Ryzen 5-7520U) (Bạc)",
                    images: [
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612878/digitalmart/asus2_ctgl54.webp",
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612881/digitalmart/asus3_adhhpi.webp",
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612951/digitalmart/asus4_ykoqg9.webp"
                    ],
                    price: 12490000
                },
                quantity: 3,
                subTotalPrice: 3 * 12490000
            },
            {
                product: {
                    id: uuid(),
                    name: "Laptop Asus Vivobook Go 15 E1504FA-NJ454W (AMD Ryzen 5-7520U) (Bạc)",
                    images: [
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612878/digitalmart/asus2_ctgl54.webp",
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612881/digitalmart/asus3_adhhpi.webp",
                        "https://res.cloudinary.com/dumhujhqd/image/upload/v1713612951/digitalmart/asus4_ykoqg9.webp"
                    ],
                    price: 12490000
                },
                quantity: 2,
                subTotalPrice: 2 * 12490000
            }
        ],
        totalPrice: 5 * 12490000,
        createdAt: "01-01-2024",
        address: "600 Harrison St, San Francisco, US",
        paymentMethod: "Cash On Delivery",
        cardNumber: "XX-XXXX-XXXX"
    }
}