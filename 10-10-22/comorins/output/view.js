
    const queryString= window.location.search;
    const urlParams= new URLSearchParams(queryString);
    const selected_product= urlParams.get('product_name');
    // alert(selected_product);
 let items=[];
    let clicked_productMenu=JSON.parse(localStorage.getItem("flipkart"));
    // console.log(clicked_productMenu[0].productMenu[0]);
     console.log(clicked_productMenu);
    for(let i=0;i<clicked_productMenu.length;i++){
        if(selected_product==clicked_productMenu[i].product_name){
            items=clicked_productMenu[i].productMenu;
            let element="";
            for(let j=0;j<items.length;j++){
                element+=`<div class="col-3" style="max-width: 540px;">
                
                 <div class="card">
                    <div class="card-body">
                    <img src="${items[j].img}" class="card-img-top" alt=""/>
                      <h5 class="card-title">${items[j].p_name}</h5>
                      <p class="card-text">${items[j].price}</p>
                      <p class="card-text">${items[j].size}</p>
                      <p class="card-text"><small class="text-muted">${items[j].Delivery}</small></p>
                    </div>
                    <a href="kart.html"><button type="button" id="add" class="btn btn-success" onclick="add(${j})">Add To Cart</button></a>
                  </div>
                  <div>

                  </div>
              </div>`
              document.getElementById("clicked_productList").innerHTML = element;
            }
        
        }
    }
      
   
    if(!localStorage.getItem("addtocart")){
      localStorage.setItem("addtocart",JSON.stringify([]));
  }
   let addproduct=JSON.parse(localStorage.getItem("addtocart"));
 
  function add(p){
  
          addproduct.push(items[p]);
        
      
      localStorage.setItem("addtocart",JSON.stringify(addproduct));

    }
    
    
    function display(){
      let cart=JSON.parse(localStorage.getItem("addtocart"));
      let element="";
      let total=0;
  
      console.log(cart)
      for(let i=0;i<cart.length;i++){
        
        
      //  console.log(menus)
     
     // element+="<div class='card mb-3  col-6' ><img src='"+cart[i].img+"'><div class='card-body'><h5 class='card-title'>"+cart[i].p_name+"</h5><h5>"+cart[i].price+"</h5><p class='card-text'><small class='text-muted'>"+cart[i].size+"</small></p><button onclick='remove("+i+")'>Remove from cart </button></div></div>";
      element+= "<div class='card' style='width: 18rem;'> <img class='kartimg card-img-top' src='"+cart[i].img+"' alt='Card image cap'><div class='card-body'><button type='button' onclick='remove("+i+")' class='click btn btn-danger'>Remove</button><a href='placeorder.html' class='click btn btn-success'>place order</a></div></div>";
      //element+= "<div class='card mb-3' style='max-width: 540px;'><div class='row no-gutters'> <div class='col-md-4'><img src='"+cart[i].img+"'><button type='button' onclick='remove("+i+")' class='click btn btn-danger'>Remove</button><a href='placeorder.html' class='click btn btn-success'>place order</a></div><div class='col-md-8'><div class='card-body'>"
      total+=parseInt(cart[i].price)
    }  console.log(element);
    document.getElementById("cartDiv").innerHTML=element;
    //console.log(total);
   document.getElementById("tot").innerHTML=total;
  }
  display();
  function remove(i){
  let deleteitem=JSON.parse(localStorage.getItem("addtocart"));
  deleteitem.splice(i,1);
  localStorage.setItem("addtocart",JSON.stringify(deleteitem));
 display();
  }


//   <div class="card mb-3" style="max-width: 540px;">
//   <div class="row no-gutters">
//     <div class="col-md-4">
//       <img src='"+cart[i].img+"'>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
  
  