var products=[];
function formData()
{    
    var pName = document.forms["myform"]["pname"].value;
    var uRL =  document.forms["myform"]["img"].value;  
    var pPrice = document.forms["myform"]["price"].value;
    var pDescription = document.forms["myform"]["description"].value;
    //alert("Product name is  " + pName + " Product URL is:" + uRL + "Product price is  " + pPrice + "Product description is:" + pDescription);

    var productList = {
        prod : pName,
        url : uRL,
        price : pPrice,
        desc : pDescription
    };
    products.push(productList);
    renderProducts();
      
}


function renderProducts() {
  html$ = ''; 

for(var key in products){
html$ +=`
    <div class="items">
       <div class="img img1"><img src ="${products[key].url}"></div>
        <div class="name">Product Name:  ${products[key].prod}</div>
          <div class="price">Price:$ ${products[key].price}</div>
           <div class="info">${products[key].desc}</div>
         </div>`;
         
}

document.getElementById("result").innerHTML = html$ ;
restForm();
}

function restForm(){
  document.getElementById("myform").reset();

}
