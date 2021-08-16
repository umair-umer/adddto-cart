const data = [
    {
        id: 1,
        name: "mobile",
        price: 500,
        image: "https://source.unsplash.com/1600x900/?mobile",
    },
    {
        id: 2,
        name: "pc",
        price: 500,
        image: "https://source.unsplash.com/1600x900/?pc",
    },
    {
        id: 3,
        name: "teblet",
        price: 500,
        image: "https://source.unsplash.com/1600x900/?teblet",
    },
    {
        id: 4,
        name: "tv",
        price: 500,
        image: "https://source.unsplash.com/1600x900/?tv",
    },
]
let cart = document.getElementById("cart")
let allcarts=[];
for (var i = 0; i < data.length; i++) {
    // console.log(data[0].price);
    cart.innerHTML+= `
    <div class="card">
            <div class="card-image">
                <img  width="100%" height="100%" src="${data[i].image}" alt="">
             </div>
            <div class="card-body">
                <h3>${data[i].price}</h3>
                <p>${data[i].name}</p>
                <button onclick='addtocart("${data[i].image}","${data[i].name}","${data[i].price}")'> add</button>
             </div>
             </div>
    `
}
 let carts=localStorage.getItem("data")
 if(carts != null){
    allcarts=JSON.parse(carts)
 }
const addtocart =(image,name,price)=>{
    cart={
        image,
        price,
        name,
    }
    allcarts.push(cart)
   localStorage.setItem("data",JSON.stringify(allcarts))
 let  num= document.getElementById("nu");
 num.innerHTML=allcarts.length;
 
 
}
const showcard = ()=>{
    let  showcard= document.getElementById("showcard");
    console.log(allcarts);

    for (var i = 0; i < allcarts.length; i++) {

        showcard.innerHTML += `
        <div class="card">
                <div class="card-image">
                    <img  width="100%" height="100%" src="${allcarts[i].image}" alt="">
                 </div>
                <div class="card-body">
                    <h3>${allcarts[i].price}</h3>
                    <p>${allcarts[i].name}</p>
                    <button onclick='addtocart("${allcarts[i].image}","${allcarts[i].name}","${allcarts[i].price}")'> add</button>
                 </div>
                 </div>
        ` 
    }
    

}