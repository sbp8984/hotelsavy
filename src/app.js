const path = require('path')
const express = require('express')
const hbs = require('hbs')
const hotel = require('./utils/hotel')
const hoteltwo = require('./utils/hoteltwo')
const search = require('./utils/search')
const image = require('./utils/image')
const autoSearch = require('./utils/autocomplete')
const cors = require('cors');


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Hotel Savy',
        name: 'Shyam'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Hotel Savy',
        name: 'Shyam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Hotel Savy',
        name: 'Shyam'
    })
})

app.get('/test', (req, res) => {
    res.render('test', {
        helpText: 'This is some helpful text.',
        title: 'Hotel Savy',
        name: 'Shyam'
    })
})

app.use(cors({
    origin: 'https://www.hotelsavy.com'
}));

app.get('/autocomplete', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search query'
        })
    }

    autoSearch(req.query.search, ({ destinationID, destinationName, destinationID1, destinationName1,destinationID2, destinationName2 }, error) => {
        if (error) {
            return res.send({ error })
        } else {
            res.send({
                destinationID: destinationID,
                destinationName: destinationName,
                destinationID1: destinationID1,
                destinationName1: destinationName1,
                destinationID2: destinationID2,
                destinationName2: destinationName2,
            })
        }
    })
})


app.get('/hotel', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a hotel name'
        })
    }
    else if (!req.query.checkin) {
        return res.send({
            error: 'You must provide a checkin date'
        })
    }
    else if (!req.query.checkout) {
        return res.send({
            error: 'You must provide a checkout date'
        })
    } else if (req.query.checkin >= req.query.checkout) {
        return res.send({
            error: 'You must provide a valid check in and check out date'
        })
    }


    search(req.query.address, ({ hotelID, hotelName, hotelLat, hotelLong }, error) => {
        if (error) {
            return res.send({ error })
        }
        //req.query.date
        hotel(hotelID, req.query.checkin, req.query.checkout, req.query.adults, req.query.currency, (hotelPrice, hotelDescription, hotelcheckout, hotelAddress, neighborhoodImage, googleMapImage, hotelStar, hotelRating, hotelTotalReviews, hotelUrl, error) => {
            if (error) {
                return res.send({ error })
            }

            hoteltwo(hotelID, req.query.checkin, req.query.checkout, req.query.adults, req.query.currency, (hotelPrice1, checkin1, checkout1, hotelUrl2, error) => {

                if (error) {
                    return res.send({ error })
                }


                image(hotelID, (imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6) => {
                    if (error) {
                        return res.send({ error })
                    }



                    res.send({
                        description: hotelDescription,
                        address1: hotelAddress,
                        price: hotelPrice,
                        price1: hotelPrice1,
                        checkin: req.query.checkin,
                        checkout: hotelcheckout,
                        checkin1: checkin1,
                        checkout1: checkout1,
                        hotelName,
                        hotelStar: hotelStar,
                        hotelRating: hotelRating,
                        hotelTotalReviews: hotelTotalReviews,
                        address: req.query.address,
                        google: googleMapImage,
                        url1: imageurl1,
                        url2: imageurl2,
                        url3: imageurl3,
                        url4: imageurl4,
                        url5: imageurl5,
                        url6: imageurl6,
                        urlArea: neighborhoodImage,
                        hotelLat,
                        hotelLong,
                        hotelUrl: hotelUrl,
                        hotelUrl2: hotelUrl2

                    })
                })
            })
        })
    })

})


// 
// app.get('/products', (req, res) => {
//     if (!req.query.search) {
//         return res.send({
//           error: 'You must provide a search term'  
//         })
//     } 
//     console.log(req.query.search)
//     res.send({
//         products: []
//     })
// })


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shyam',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shyam',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})