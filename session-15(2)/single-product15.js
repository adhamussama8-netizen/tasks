//selectors
const productContainer=document.querySelector("main")


//vars 
const productId = localStorage.getItem("ProductId")


function displayProduct(data){

    productContainer.innerHTML=`
      <div class="product">
          <div class="container">

            <div class="row align-items-center">

                <!-- Product Image -->
                <div class="col-md-6">

                    <div class="product-image">
                        <img
                            src=${data.images[0]}
                            alt=${data.title}
                            class="img-fluid"
                        >
                    </div>

                </div>

                <!-- Product Content -->
                <div class="col-md-6">

                    <div class="product-content">

                        <span class="category">${data.category}</span>

                        <h1>Wireless Headphones</h1>

                        <h2 class="price">$${data.price}</h2>

                        <p class="description">
                            Enjoy high-quality sound with these premium
                            wireless headphones. Designed for comfort,
                            style, and excellent performance.
                        </p>

                        <div class="product-info">

                            <p><strong>Brand:</strong> Premium Audio</p>

                            <p><strong>Color:</strong> Black</p>

                            <p><strong>Availability:</strong> In Stock</p>

                        </div>

                        <button class="buy-btn">
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        </div>
      </div>
    `
}

//functions
function getproduct(){
    if(productId){
        fetch(`https://dummyjson.com/products/${productId}`)
        .then((res)=>res.json())
        .then((data)=>displayProduct(data))
    }
 }

 getproduct()