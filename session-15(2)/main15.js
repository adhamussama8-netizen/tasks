const productsRow=document.querySelector("main .row")

function displayProduct(data){

 const products=data.products

 products.forEach((p)=>{
     productsRow.innerHTML+= `
    <div class=" col-12 md:col-6 lg:col-4">
       <div class="product bg-info bg-30 overflow-hidden rounded">   
           <img class="w-100" src="${p.images[0]}" alt="${p.title}">
           <div class="content p-5 d-flex flex-column gap-4">
           <h3 class="mb-0">${p.title} ${p.price} ${p.description}</h3>
           <p class="mb-0">${p.description}</p>
           <span>$${p.price}</span>   
          <a href="./single-Product15.html" class="d-block">
          <button onclick="getProductId(${p.id})" class=" w-100 btn btn-info text-uppercase">view products</button>
          </a>
    </div>           
 </div>
</div>
 `
     })

}

function getproducts(){
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json())
    .then((data)=> {
     displayProduct(data)
  
    })
    
}
getproducts()


function getProductId(id){

    localStorage.setItem("ProductId",JSON.stringify(id))
}