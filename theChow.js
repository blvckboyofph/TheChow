const signInBtn = document.querySelector('.signInBtn')
const body = document.querySelector('body')
const overall = document.querySelector('.overall-div')
const password = document.querySelector('#password')
const userEmail = document.querySelector('#email')
const emailErr = document.querySelector('#EmailError')
const passErr = document.querySelector('#PassError')
const form =  document.querySelector('form')
const showBtn = document.querySelector('.showPass')
const navigation = document.querySelector('.kaycee-div')  
const moveBtn = document.querySelector('.moveBtn')
const userName = document.querySelector('#user-name')
const cartSection = document.querySelector('.cart-sections')
const openCart = document.querySelector('.Go-to')
const availableFoods = document.querySelector('.food-div')
const backToOrder = document.querySelector('.Go-back')


const jollof = document.querySelector('#jollof')
const count = document.querySelector('#cart-count')
const afang = document.querySelector('#afang')  
const chicken = document.querySelector('#chicken') 
const fried = document.querySelector('#fried-rice')
const egusiSoup = document.querySelector('#egusi')   
const hamburger = document.querySelector('#Hamburger')
const hotDogs = document.querySelector('#hot-dogs')
const pizza = document.querySelector('#Pizza') 
const coconut = document.querySelector('#coconut')

const productTitle = document.querySelector('.prod-title')
const productTitle2 = document.querySelector('.prod-title2')
const productTitle3 = document.querySelector('.prod-title3')
const productTitle4 = document.querySelector('.prod-title4')
const productTitle5 = document.querySelector('.prod-title5')
const productTitle6 = document.querySelector('.prod-title6')
const productTitle7 = document.querySelector('.prod-title7')
const productTitle8 = document.querySelector('.prod-title8')
const productTitle9 = document.querySelector('.prod-title9')




const foodImage = document.querySelector('.foods-img')  
const foodImage2 = document.querySelector('.foods-img2')
const foodImage3 = document.querySelector('.foods-img3')
const foodImage4 = document.querySelector('.foods-img4')
const foodImage5 = document.querySelector('.foods-img5')
const foodImage6 = document.querySelector('.foods-img6')
const foodImage7 = document.querySelector('.foods-img7')
const foodImage8 = document.querySelector('.foods-img8')
const foodImage9 = document.querySelector('.foods-img9')


const productPrice = document.querySelector('.prod-price')
const productPrice2 = document.querySelector('.prod-price2')  
const productPrice3 = document.querySelector('.prod-price3')  
const productPrice4 = document.querySelector('.prod-price4')  
const productPrice5 = document.querySelector('.prod-price5')  
const productPrice6 = document.querySelector('.prod-price6')  
const productPrice7 = document.querySelector('.prod-price7')  
const productPrice8 = document.querySelector('.prod-price8')  
const productPrice9 = document.querySelector('.prod-price9')  


const del = document.querySelector('.deleteOrder')
const del2 = document.querySelector('.deleteOrder2')
const del3 = document.querySelector('.deleteOrder3')
const del4 = document.querySelector('.deleteOrder4')
const del5 = document.querySelector('.deleteOrder5')
const del6 = document.querySelector('.deleteOrder6')
const del7 = document.querySelector('.deleteOrder7')
const del8 = document.querySelector('.deleteOrder8')
const del9 = document.querySelector('.deleteOrder9')


const cartItem = document.querySelector('.cartItem')
const cartItem2 = document.querySelector('.cartItem2')
const cartItem3 = document.querySelector('.cartItem3')
const cartItem4 = document.querySelector('.cartItem4')
const cartItem5 = document.querySelector('.cartItem5')
const cartItem6 = document.querySelector('.cartItem6')
const cartItem7 = document.querySelector('.cartItem7')
const cartItem8 = document.querySelector('.cartItem8')
const cartItem9 = document.querySelector('.cartItem9')


const emptyCart = document.querySelector('.emptycart')
const total = document.querySelector('#total')
const cartBar = document.querySelector('.add-to-cartbar')
const clearTotal = document.querySelector('.clears')


const UserDatabase = [
    {
        email: 'praisekelechi02@gmail.com',
        password: 'ilovemymom##',
        fullname: 'Praise Kelechi'
    },
    {
        email: 'kunleaja97@gmail.com',
        password: 'ughr78rgr73$',
        fullname: 'Kunle Ajayi'
    },
    {
        email: 'divinegodwin1977@gmail.com',
        password: 'dboy20041@',
        fullname: 'Divine Godwin'
    }
]

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

signInBtn.addEventListener('click', ()=> {
    if(userEmail.value.trim().length<10) {
        emailErr.innerHTML = 'Email must be up to 10 characters'
        return
    }
    else if(password.value.trim().length<8) {
        passErr.innerHTML = 'Password must be up to 8 characters'
    }

   const User = UserDatabase.find((el)=> {
    return(
        el.email === userEmail.value.trim()
    )
   })

   if(!User) {
    emailErr.innerHTML = 'user not found'
   }
   else {
    emailErr.innerHTML = 'found user'
   }
   if(User) {
    if(User.password === password.value.trim()) {
        passErr.innerHTML = 'correct password'
        login()
        alert(`welcome ${User.fullname}`)
        displayName()
    }
    else {
        passErr.innerHTML = 'incorrect password'
    }
   }

   function login() {
    overall.classList.replace('block', 'none')
    navigation.classList.replace('mobile', 'mobiles')
   }


   function displayName() {
    let lastNAme = User.fullname.slice(User.fullname.indexOf(' '),100).toUpperCase()
    userName.innerHTML = `Hi, ${lastNAme}`            
   }
})

showBtn.addEventListener('click', ()=> {
    if(password.getAttribute('type')==='password') {
        password.setAttribute('type', 'text') 
        showBtn.innerHTML= 'hide'
        showBtn.style.backgroundColor = 'black'
        showBtn.style.color = 'white' 
        showBtn.display = 'block'
    }
    else {
        (password.getAttribute('type')==='text')
        password.setAttribute('type', 'password')
        showBtn.innerHTML = 'show'
        showBtn.style.backgroundColor = 'white'
        showBtn.style.color = 'black'
        showBtn.display= 'block'
    }
})     

moveBtn.addEventListener('click', ()=> {
    body.classList.toggle('darkmode')   
    if(moveBtn.classList.contains('moveBtn')) {
        moveBtn.classList.replace('moveBtn', 'movedBtn')
    }
    else {
        moveBtn.classList.replace('movedBtn', 'moveBtn')
    }  
})        

moveBtn.addEventListener('click', ()=> {
    cartBar.classList.toggle('cartmode')
})


const foodData = [
    {
        prodId: 0,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/jollof rice.webp',
        ProdName: 'Jollof Rice',
        ProdPrice: 9

    },
    {
        prodId: 1,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/afang soup.webp',
        ProdName: 'Afang Soup',
        ProdPrice: 7
    },
    {
        prodId: 2,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/chicken.webp',
        ProdName: 'Fried Chicken',
        ProdPrice: 10
        
    },
      {
        prodId: 3,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/fried rice.webp',
        ProdName: 'Fried Rice',
        ProdPrice: 9,
        
     },
     {
        prodId : 4,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/egusi soup.webp',
        ProdName: 'Egusi Soup',
        ProdPrice: 8,
        
     },
      {
        prodId: 5,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/hamburger.webp',
        ProdName: 'Hamburger',
        ProdPrice: 5,
        
    },
     {
        prodId: 6,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/hot dogs.webp',
        ProdName: 'Hot dogs',
        ProdPrice: 5,
        
      },
      {
        prodId: 7,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/pizza.webp',
        ProdName: 'pizza',
        ProdPrice: 12,
        
     },
     {
        prodId: 8,
        image: '/01_HTML/01_HTML FUNDAMENTALS/02_ HTML_INTERMEDIATE_HTML1/media/coconut rice.webp',
        ProdName: 'Coconut Rice',
        ProdPrice: 7,
        
     }

]

let  foodCart = []


if(foodCart.length===0) { 
    count.innerHTML = 0
    emptyCart.innerHTML = 'Below is your order'
    total.innerHTML = '$ 0.00'
 } 



jollof.addEventListener('click', ()=>{
    foodCart.push(foodData[0])
    console.log(foodCart)
    count.innerHTML++
    jollofOrder() 
    addOrder()
    calc()
}) 
afang.addEventListener('click', ()=>{
    foodCart.push(foodData[1])
    console.log(foodCart)
    count.innerHTML++
    afangOrder()
    addOrder2()
    calc()
})
chicken.addEventListener('click', ()=> {
    foodCart.push(foodData[2])
    console.log(foodCart)
    count.innerHTML++
    chickenOrder()
    addOrder3()
    calc()
})
fried.addEventListener('click', ()=> {
    foodCart.push(foodData[3])
    console.log(foodCart)
    count.innerHTML++
    friedriceOrder()
    addOrder4()
    calc()
})

egusiSoup.addEventListener('click', ()=> {
    foodCart.push(foodData[4])
    console.log(foodCart)
    count.innerHTML++
    egusiOrder()
    addOrder5()
    calc()
})
hamburger.addEventListener('click', ()=> {
    foodCart.push(foodData[5])
    console.log(foodCart)
    count.innerHTML++
    hamOrder()
    addOrder6()
    calc()
})
hotDogs.addEventListener('click', ()=> {
    foodCart.push(foodData[6])
    console.log(foodCart)
    count.innerHTML++
    hotDogsOrder()
    addOrder7()
    calc()
})
pizza.addEventListener('click', ()=> {
    foodCart.push(foodData[7])
    console.log(foodCart)
    count.innerHTML++
    pizzaOrder()
    addOrder8()
    calc()
})    
coconut.addEventListener('click', ()=> {
    foodCart.push(foodData[8])
    console.log(foodCart)
    count.innerHTML++
    coconutRiceOrder()
    addOrder9()
    calc()
})

clearTotal.addEventListener('click', ()=> {
    total.innerHTML = `$ 0.00 `
    clearCart() 
    count.innerHTML = 0
})

function jollofOrder() {
    productTitle.innerHTML = foodData[0].ProdName
    foodImage.src = foodData[0].image
    productPrice.innerHTML = `$  ${foodData[0].ProdPrice} `
    del.classList.replace('comot', 'dey') 
}
function afangOrder() {
    productTitle2.innerHTML = foodData[1].ProdName
    foodImage2.src = foodData[1].image
    productPrice2.innerHTML = `$ ${foodData[1].ProdPrice}`
    del2.classList.replace('comot', 'dey')
}
function chickenOrder() {
    productTitle3.innerHTML = foodData[2].ProdName
    foodImage3.src = foodData[2].image
    productPrice3.innerHTML = `$ ${foodData[2].ProdPrice}`
    del3.classList.replace('comot', 'dey')
}
function friedriceOrder() {
    productTitle4.innerHTML = foodData[3].ProdName
    foodImage4.src = foodData[3].image
    productPrice4.innerHTML = `$ ${foodData[3].ProdPrice}`
    del4.classList.replace('comot', 'dey')
}
function egusiOrder() {
    productTitle5.innerHTML = foodData[4].ProdName
    foodImage5.src = foodData[4].image
    productPrice5.innerHTML = `$ ${foodData[4].ProdPrice}`
    del5.classList.replace('comot', 'dey')
}
function hamOrder() {
    productTitle6.innerHTML = foodData[5].ProdName
    foodImage6.src = foodData[5].image
    productPrice6.innerHTML = `$ ${foodData[5].ProdPrice}`
    del6.classList.replace('comot', 'dey')
}
function hotDogsOrder() {
    productTitle7.innerHTML = foodData[6].ProdName
    foodImage7.src = foodData[6].image
    productPrice7.innerHTML = `$ ${foodData[6].ProdPrice}`
    del7.classList.replace('comot', 'dey')
} 
function pizzaOrder() {
    productTitle8.innerHTML = foodData[7].ProdName
    foodImage8.src = foodData[7].image
    productPrice8.innerHTML = `$ ${foodData[7].ProdPrice}`
    del8.classList.replace('comot', 'dey')
}
function coconutRiceOrder() {
    productTitle9.innerHTML = foodData[8].ProdName
    foodImage9.src = foodData[8].image
    productPrice9.innerHTML = `$ ${foodData[8].ProdPrice}`
    del9.classList.replace('comot', 'dey')
}


del.addEventListener('click', ()=>{
    clearOrder() 
    foodCart.pop(foodData[0])
    calc()
    console.log(foodCart)
})      
del2.addEventListener('click', ()=>{
    clearOrder2()
    foodCart.pop(foodData[1])
    calc()
    console.log(foodCart)
})
del3.addEventListener('click', ()=> {
    clearOrder3()
    foodCart.pop(foodData[2])
    calc()
    console.log(foodCart)
})
del4.addEventListener('click', ()=> {
    clearOrder4()
    foodCart.pop(foodData[3])
    calc()
    console.log(foodCart)
}) 
del5.addEventListener('click', ()=> {
    clearOrder5()
    foodCart.pop(foodData[4])
    calc()
    console.log(foodCart)
})
del6.addEventListener('click', ()=> {
    clearOrder6()
    foodCart.pop(foodData[5])
    calc()
    console.log(foodCart)
})
del7.addEventListener('click', ()=> {
    clearOrder7()
    foodCart.pop(foodData[6])
    calc()
    console.log(foodCart)
})
del8.addEventListener('click', ()=> {
    clearOrder8() 
    foodCart.pop(foodData[7])
    calc()
    console.log(foodCart)
}) 
del9.addEventListener('click', ()=> {
    clearOrder9()
    foodCart.pop(foodData[8])
    calc()
    console.log(foodCart)
})


function clearOrder() {
    cartItem.classList.replace('cartItem', 'none')
    count.innerHTML--
}
function clearOrder2() {
    cartItem2.classList.replace('cartItem2', 'none')
    count.innerHTML--
}
function clearOrder3() {
    cartItem3.classList.replace('cartItem3', 'none')
    count.innerHTML--
}
function clearOrder4() {
    cartItem4.classList.replace('cartItem4', 'none')
    count.innerHTML--
}
function clearOrder5() {
    cartItem5.classList.replace('cartItem5', 'none')
    count.innerHTML--
} 
function clearOrder6() {
    cartItem6.classList.replace('cartItem6', 'none')
}
function clearOrder7() {
    cartItem7.classList.replace('cartItem7', 'none')
}
function clearOrder8() {
    cartItem8.classList.replace('cartItem8', 'none')
}
function clearOrder9() {
    cartItem9.classList.replace('cartItem9', 'none')
}


function addOrder() {
    cartItem.classList.replace('none', 'cartItem')
}
function addOrder2() {
    cartItem2.classList.replace('none', 'cartItem2')
}
function addOrder3() {
    cartItem3.classList.replace('none', 'cartItem3')
}
function addOrder4() {
    cartItem4.classList.replace('none', 'cartItem4')
}
function addOrder5() {
    cartItem5.classList.replace('none', 'cartItem5')
}
function addOrder6() {
    cartItem6.classList.replace('none', 'cartItem6')
} 
function addOrder7() {
    cartItem7.classList.replace('none', 'cartItem7')
}
function addOrder8() {
    cartItem8.classList.replace('none', 'cartItem8')
}
function addOrder9() {
    cartItem9.classList.replace('none', 'cartItem9')
}


function clearCart() {
    foodCart = []
    // count.innerHTML = 0
}
 
function calc() {
     let totalPrice = foodCart.map(el=>el.ProdPrice).reduce((cv,acv)=> cv+acv)
     total.innerHTML =   `$  ${totalPrice}.00` 
     console.log(totalPrice)
}

openCart.addEventListener('click', ()=> {
    cartSection.classList.replace('cart-sections', 'blocks')
    availableFoods.classList.replace('food-div', 'none') 
    openCart.classList.replace('Go-to', 'none')
    backToOrder.classList.replace('Go-back', 'Go-in')
})

backToOrder.addEventListener('click', ()=> {
    cartSection.classList.replace('blocks', 'cart-sections')
    availableFoods.classList.replace('none', 'food-div') 
    openCart.classList.replace('none', 'Go-to')
    backToOrder.classList.replace('Go-in', 'Go-back')
})
// let totalPrice = foodCart.map(el=>el.ProdPrice).reduce((cv,acv)=>cv+acv)
// total.innerHTML = totalPrice

// const foodPrices = [
//     {
//         food: 'beans',
//         price: 3990
//     },
//     {
//         food: 'beans',
//         price: 2990
//     },
//     {
//         food: 'beans',
//         price: 2990
//     },
// ]

// const total = foodPrices.map(el=>el.price).reduce((cv,acv)=>cv+acv)
// console.log(total)



// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i, 2*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr)



// username.find((el=>el.charAt(0)==='s')) 
// btnOne.addEventListener('click', ()=> {
//     showthem()
// })

// function showthem() {
//     mine.classList.replace('none', 'block')
// }



