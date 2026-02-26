const data = [
    {
        "name": "Super OYO Townhouse 1247 Hotel Skyline",
        "description": "Modern premium stay with high-speed Wi-Fi, king-sized beds, and complimentary breakfast in a prime location.",
        "city": "Bhopal",
        "price": 1850,
        "rating": 4.2,
        "available": true,
        "imageUrl": "https://media.istockphoto.com/id/174767532/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=2BCNeFcX5PGzCxfZKXewhI_y2C9R7Jw_tzVYCXmRRCE="
    },
    {
        "name": "OYO Flagship 41263 Royal Stay",
        "description": "Budget-friendly 3-star room featuring clean linens, AC, and 24/7 power backup near the railway station.",
        "city": "Indore",
        "price": 1200,
        "rating": 3.8,
        "available": false,
        "imageUrl": "https://images.oyoroomscdn.com/uploads/hotel_image/41263/medium/1822228f0fbea072.jpg"
    },
    {
        "name": "Capital O 70124 The Landmark",
        "description": "Spacious luxury suite with a dedicated workspace, mini-fridge, and access to the in-house restaurant.",
        "city": "Bhopal",
        "price": 2400,
        "rating": 4.5,
        "available": true,
        "imageUrl": "https://t3.ftcdn.net/jpg/02/94/19/40/360_F_294194023_disE35GtlVLDQx4caNDaWewZI8LbxWFQ.jpg"
    },
    {
        "name": "OYO Home 88421 Cozy Heritage Stay",
        "description": "A peaceful homestay experience with traditional decor, a private balcony, and home-cooked meal options.",
        "city": "Ujjain",
        "price": 950,
        "rating": 4.0,
        "available": true,
        "imageUrl": "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg"
    }
]

const form = document.querySelector('form')
const container = document.querySelector('.container');
function renderItems() {
    let item = ''

    
    data.forEach((room) => {
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
                    <button id="editBtn">Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        `
        container.innerHTML = item
    })

}

renderItems()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newItem = {
        imageUrl:form.childNodes[1].childNodes[1].value,
        name:form.childNodes[3].childNodes[1].value,
        description: form.childNodes[5].childNodes[1].value,
        city:form.childNodes[7].childNodes[1].value,
        price: form.childNodes[9].childNodes[1].value,
        rating: form.childNodes[11].childNodes[1].value,
        available: true
    }

    data.push(newItem);
    form.reset()
    renderItems();
    
})