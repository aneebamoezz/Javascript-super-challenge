const propertyForSaleArr = [
    {
        propertyLocation: 'Kensington, London',
        priceGBP: 890000,
        roomsM2: [14, 18, 14, 10, 6],
        comment: 'Highly desirable location in stunning scenery!',
        image: 'cottage.jpg'
    },
    {
        propertyLocation: 'Wirral, Liverpool',
        priceGBP: 650000,
        roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
        comment: 'Astonishing view with a modern finish!',
        image: 'desres.jpg'
    },
    {
        propertyLocation: 'Beach, Brighton',
        priceGBP: 420000,
        roomsM2: [5],
        comment: 'Beautiful interior and a spacious room.',
        image: 'hut.jpg'
    },
    {
        propertyLocation: 'Highlands, Scotland',
        priceGBP: 550000,
        roomsM2: [6, 12, 11, 5],
        comment: 'Lots of potential, snug, a must see!',
        image: 'shed.jpg'
    }
]

const placeholderPropertyObj = {
    propertyLocation: '1 Joe Bloggs street',
    priceGBP: 100000,
    roomsM2: [16, 12, 6, 11, 5],
    comment: 'This is the description',
    image: 'placeholder.jpg'
}

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        return `
            <section class="card">
                <img src="images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoomSizeM2} m&sup2;</h3>
                </div>
            </section>` 
    }).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)
    
/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)