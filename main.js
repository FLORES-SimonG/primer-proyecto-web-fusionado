const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');/*modifiqué el nombre aca de aside paso a shoppingcartCotainer*/
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');   
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');   
}
function toggleCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    // shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive');

}

const productList=[];

productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Computer',
    price: 5902,
    image:'https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Phone',
    price: 999,
    image:'https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


/*<div class="product-card">
            <img src="https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            <div class="product-info">
                <div>
                    <p>$120</p>
                    <p>Bike</p>
                </div>
                
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>             
        </div>
*/



function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');//creo un div?
        productCard.classList.add('product-card');
    
        //product={name,price,image}-->product.image
        const productImg = document.createElement('img'); //creo una imagen de ficción
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');//creo un div
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('p');
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText=product.name;
    
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
        
        
    
    }
}

renderProducts(productList);