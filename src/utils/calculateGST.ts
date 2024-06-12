export function calculateGST(totalPrice: number, gstRate: number) {
    const gstAmount = (gstRate / 100) * totalPrice;

    return Math.ceil(gstAmount)
}