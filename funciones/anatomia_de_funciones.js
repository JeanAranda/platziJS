function calculateDiscountPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const orginalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log("Precio Original: S/."+originalPrice)
console.log("Descuento: "+discountPercentage+"%")
console.log("Precion con descuento: S/."+finalPrice)
