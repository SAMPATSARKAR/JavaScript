const objt = [

    {
        course: "Js",
        price: 799
    },

    {
        course: "rag",
        price: 799
    },

    {
        course: "mlops",
        price: 799
    }
]
const addPrice = objt.reduce((acc,item)=>acc+item.price,0 )
console.log(addPrice);
