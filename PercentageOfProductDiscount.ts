var item = [250,645,300,900,50]
var sum = 0
var DiscountMony = 0
for(let i = 0;i<item.length;i++)
{
    var Offer = item[i] /10
    console.log("Discount of per product is  = " +Offer)
    sum += item[i] 
}


DiscountMony =  sum/10
console.log("Total Discount is = "+DiscountMony)
console.log("The Total bill of Product  = "+(sum-DiscountMony))

