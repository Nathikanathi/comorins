
    const queryString= window.location.search;
    const urlParams= new URLSearchParams(queryString);
    const selected_product= urlParams.get('product_name');
    // alert(selected_product);
 
    let clicked_productMenu=JSON.parse(localStorage.getItem("flipkart"));
    // console.log(clicked_productMenu[0].productMenu[0]);
    // console.log(clicked_productMenu);
    for(let i=0;i<clicked_productMenu.length;i++){
        if(selected_product==clicked_productMenu[i].product_name){
            let items=clicked_productMenu[i].productMenu;
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
                    <button type="button" id="add" class="btn btn-success onclick="add()"><a href="kart.html">Add To Cart</a></button>
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
  // let news_arr=JSON.parse(localStorage.getItem("newspaper"));
  function add(){
    for(let i=0;i<clicked_productMenu.length;i++){
      
      if(selected_product==clicked_productMenu[i].product_name){
          addproduct.push(clicked_productMenu[i]);
        }
      }
      localStorage.setItem("addtocart",JSON.stringify(addproduct));

    }
    
    
    function display(){
      let cart=JSON.parse(localStorage.getItem("addtocart"));
      let element=" ";
      for(let i=0;i<cart.length;i++){
      element+='<div class="card mb-3  col-6" ><img src='+cart[i].image+'><div class="card-body"><h5 class="card-title"><a href="view.html?id='+cart[i].p_name+' "target=_blank">'+cart[i].price+'</a></h5><p class="card-text"><small class="text-muted">'+cart[i].size+'</small></p><button onclick="remove('+i+');">DELETE</button></div></div>';
                   
  }  
  document.getElementById("cartDiv").innerHTML=element;  
  }
   display();
  function remove(i){
  let deleteitem=JSON.parse(localStorage.getItem("addtocart"));
  deleteitem.splice(i,1);
  localStorage.setItem("addtocart",JSON.stringify(deleteitem));
  display();
  }