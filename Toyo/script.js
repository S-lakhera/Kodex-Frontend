const hotelData = [
    {
        "name": "Super OYO Townhouse 1247 Hotel Skyline",
        "description": "Modern premium stay with high-speed Wi-Fi, king-sized beds, and complimentary breakfast in a prime location.",
        "city": "Bhopal",
        "price": 1850,
        "rating": 4.2,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600"
    },
    {
        "name": "OYO Flagship 41263 Royal Stay",
        "description": "Budget-friendly 3-star room featuring clean linens, AC, and 24/7 power backup near the railway station.",
        "city": "Indore",
        "price": 1200,
        "rating": 3.8,
        "available": false,
        "imageUrl": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600"
    },
    {
        "name": "Capital O 70124 The Landmark",
        "description": "Spacious luxury suite with a dedicated workspace, mini-fridge, and access to the in-house restaurant.",
        "city": "Bhopal",
        "price": 2400,
        "rating": 4.5,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600"
    },
    {
        "name": "OYO Home 88421 Cozy Heritage Stay",
        "description": "A peaceful homestay experience with traditional decor, a private balcony, and home-cooked meal options.",
        "city": "Ujjain",
        "price": 950,
        "rating": 4.0,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600"
    },
    {
        "name": "Collection O 1542 Elite Residency",
        "description": "Elegant stay featuring contemporary furniture, an infinity pool access, and premium toiletries.",
        "city": "Indore",
        "price": 3200,
        "rating": 4.7,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600"
    },
    {
        "name": "OYO Flagship 8374 Green View",
        "description": "Eco-friendly rooms surrounded by lush greenery, perfect for a relaxing weekend getaway.",
        "city": "Gwalior",
        "price": 1100,
        "rating": 3.9,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600"
    },
    {
        "name": "Townhouse 982 The Urban Hub",
        "description": "A trendy spot for digital nomads with ergonomic chairs, coffee bar, and high-speed fiber internet.",
        "city": "Jabalpur",
        "price": 1950,
        "rating": 4.3,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=600"
    },
    {
        "name": "Capital O 2210 Golden Palms",
        "description": "Experience luxury with a king-sized bed, marble flooring, and 24-hour room service.",
        "city": "Indore",
        "price": 2800,
        "rating": 4.6,
        "available": false,
        "imageUrl": "https://images.unsplash.com/photo-1591088398332-8a77d399e843?q=80&w=600"
    },
    {
        "name": "OYO Home 7721 Mountain Breeze",
        "description": "Nestled in the hills, this stay offers panoramic views and a cozy fireplace for cold nights.",
        "city": "Pachmarhi",
        "price": 1500,
        "rating": 4.4,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600"
    },
    {
        "name": "Silver Key 4421 Executive Suites",
        "description": "Specially designed for corporate travelers, located in the heart of the business district.",
        "city": "Bhopal",
        "price": 2100,
        "rating": 4.1,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1578683010236-d716f9759678?q=80&w=600"
    },
    {
        "name": "OYO Flagship 2012 Grand Central",
        "description": "Simple, clean, and effective. Centrally located with easy access to malls and local markets.",
        "city": "Sagar",
        "price": 850,
        "rating": 3.7,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600"
    },
    {
        "name": "Collection O 5543 Blue Diamond",
        "description": "Premium hotel with a rooftop lounge, gym, and complimentary airport shuttle service.",
        "city": "Indore",
        "price": 3500,
        "rating": 4.8,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600"
    },
    {
        "name": "OYO 8821 Smart Stay",
        "description": "Compact rooms with smart storage solutions and automated lighting for a futuristic feel.",
        "city": "Ujjain",
        "price": 1050,
        "rating": 4.0,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=600"
    },
    {
        "name": "Townhouse 332 Platinum Wing",
        "description": "Boutique hotel experience with designer decor and a signature breakfast buffet.",
        "city": "Bhopal",
        "price": 2250,
        "rating": 4.5,
        "available": false,
        "imageUrl": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600"
    },
    {
        "name": "OYO Home 9901 Lakeview Cottage",
        "description": "A charming cottage by the lake, perfect for couples looking for a romantic retreat.",
        "city": "Bhopal",
        "price": 1700,
        "rating": 4.3,
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=600"
    }
];

let reviewList = []

function saveToLocalStorage(){
    localStorage.setItem('hotelData',JSON.stringify(allData))
    localStorage.setItem('reviewList',JSON.stringify(reviewCartData))
}
let allData = JSON.parse(localStorage.getItem('hotelData')) || hotelData
let reviewCartData = JSON.parse(localStorage.getItem('reviewList')) || reviewList

// Rendering all data
let body = document.body;
const form = document.querySelector('form')
const formContainer = document.querySelector('.form-container')
let isFormVisible = false;
let isCartVisible = false;
const reviewListContainer = document.querySelector('.review-List')
const reviewCartBtn = document.querySelector('#review-cart')
const cardContainer = document.querySelector('.container');
let editIndex = null

function renderItems(data,container) {
    let item = ''

    
    data.forEach((room, index) => {
        item += `
            <div class="card">
                <div class="image">
                    <img src="${room.imageUrl}" alt="listingImage">
                    <div class="layer"${room.available? ">Available":"id='red'>Not available"}</div>
                </div>
                <div class="details">
                    <h2>${room.name}</h2>
                    <p>${room.description}</p>
                    <h4>City : ${room.city}</h4>
                    <h4>Charges : ₹${room.price}/Night</h4>

                </div>
                <div class="btns">
                    <button class="editBtn" id=${index}>Edit</button>
                    <button class="deleteBtn" id="${index}" >Delete</button>
                    <button class="addForReview" id="${index}" >Add to Review</button>
                </div>
            </div>
        `
        container.innerHTML = item
    })

}

renderItems(allData,cardContainer);

// Creating new data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newItem = {
        imageUrl:form.childNodes[3].childNodes[1].value,
        name:form.childNodes[5].childNodes[1].value,
        description: form.childNodes[7].childNodes[1].value,
        city:form.childNodes[9].childNodes[1].value,
        price: form.childNodes[11].childNodes[1].value,
        rating: form.childNodes[13].childNodes[1].value,
        available: true
    }

    

    if(editIndex == null){
        allData.push(newItem);
        alert("Item Added Successfully...")
    }
    else{
        allData[editIndex] = newItem
        editIndex = null;
        alert("Item Updated Successfully...")
    }
    
    saveToLocalStorage()
    form.reset()
    renderItems(allData,cardContainer);
    toggleFormVisibility();
})  

// deleting the room data

// let card = document.querySelector('.card')
cardContainer.addEventListener('click', (e) => {
    let id = e.target.id;
    if(!id) return;
    let room = allData[id];
    
    if(e.target.className == "deleteBtn")
    {
        let deleteConfirmation = confirm('Do You want to delete this Listing')
        if(!deleteConfirmation) return

        allData.splice(id,1);
        saveToLocalStorage()
        renderItems(allData,cardContainer);
    }

    if(e.target.className == "editBtn")
        {
            toggleFormVisibility()
        
        form.childNodes[3].childNodes[1].value = room.imageUrl
        form.childNodes[5].childNodes[1].value = room.name
        form.childNodes[7].childNodes[1].value = room.description
        form.childNodes[9].childNodes[1].value = room.city
        form.childNodes[11].childNodes[1].value = room.price
        form.childNodes[13].childNodes[1].value = room.rating
        
        editIndex = id;
    }
    
    if(e.target.className == "addForReview")
    {
        reviewCartData.push(room);
        saveToLocalStorage();
    }
})

const addListingBtn = document.getElementById('addNew')
addListingBtn.addEventListener('click',() => {
    toggleFormVisibility()
})

function toggleFormVisibility(){
    if(isFormVisible)
    {
        formContainer.style.top = "-400%"
    }
    else{
        formContainer.style.top = "0"
    }
    isFormVisible = !isFormVisible;
}

function toggleCartVisibility(){
    if(isCartVisible)
    {
        reviewListContainer.style.top = "-400%"
    }
    else{
        reviewListContainer.style.top = "0"
    }
    isCartVisible = !isCartVisible;
}

const closeBtn = document.querySelector('.close-btn')

const closeCartBtn = document.querySelector('.close-cart')

function renderCart(data,container){
    let cart = ''

    
    data.forEach((room,index) => {
        cart += `
            <button class="close-cart">&times;</button>
            <div class="card">
            <div class="image">
                    <img src="${room.imageUrl}" alt="listingImage">
                    <div class="layer"${room.available? ">Available":"id='red'>Not available"}</div>
                    </div>
                    <div class="details">
                    <h2>${room.name}</h2>
                    <p>${room.description}</p>
                    <h4>City : ${room.city}</h4>
                    <h4>Charges : ₹${room.price}/Night</h4>
                    <div class="btns">
                    <button class="removeBtn" id="${index}" >Remove</button>
                </div>
                    </div>
            </div>
        `
        container.innerHTML = cart
    })
}

reviewCartBtn.addEventListener('click',() => {
    toggleCartVisibility()
    renderCart(reviewCartData,reviewListContainer)
})

closeBtn.addEventListener("click", () => {
    if(isFormVisible) toggleFormVisibility();
    
})

reviewListContainer.addEventListener('click', (e) => {
    // Check for Close Button FIRST (it doesn't need an ID)
    if(e.target.classList.contains('close-cart')){
        toggleCartVisibility();
        return; // Exit here
    }

    // Now check for Remove Button (which needs an ID)
    let id = e.target.id;
    if(!id) return;

    if(e.target.classList.contains('removeBtn')) {
        reviewCartData.splice(id, 1);
        saveToLocalStorage();
        renderCart(reviewCartData, reviewListContainer);
    }
});

let nav = document.querySelector('nav');
body.addEventListener('wheel',(e) => {
    
    if(e.deltaY<0)
    {
        nav.style.opacity = "1"
    }
    else{
        nav.style.opacity = "0"
    }
})