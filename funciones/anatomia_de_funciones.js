function calculateDiscountPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 15
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log("Precio Original: S/."+originalPrice)
console.log("Descuento: "+discountPercentage+"%")
console.log("Precio con descuento: S/."+finalPrice)
