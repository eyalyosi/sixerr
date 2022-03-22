// import axios from 'axios';
// import { httpService } from './http.service';

// axios.defaults.withCredentials = true

import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';



const GIGS_KEY = 'gigs_db';
// _createGigs()

export const bookService = {
    query,
    save,
    getById,
    addReview,
    getGoogleBooks,
}

function query() {
    return storageService.query(GIGS_KEY);
}

function save(gig) {
    if (gig.id) return storageService.put(GIGS_KEY, gig);
    else return storageService.post(GIGS_KEY, gig);
}
function getById(gigId) {
    return storageService.get(GIGS_KEY, gigId);
}

function _createGigs() {
    let gigs = utilService.loadFromStorage(GIGS_KEY);
    if (!gigs || !gigs.length) {
        gigs = [

        ];
        utilService.saveToStorage(GIGS_KEY, gigs);
    }
    return gigs;
}

// function addReview(review, bookId) {
//     return getById(bookId).then(book => {
//         console.log('from addReview', book)
//         if (!book.reviews) book.reviews = []
//         book.reviews.push(review)
//         return storageService.put(BOOKS_KEY, book)
//     })
// }




// export const toyService = {
//     query,
//     getById,
//     remove,
//     save,
//     getEmptyToy
// };

// async function query(filterBy) {
//     return await httpService.get('toy', filterBy)
// }

// async function getById(toyId) {
//     return await httpService.get(`toy/${toyId}`)
// }

// async function remove(toyId) {
//     return await httpService.delete(`toy/${toyId}`)
// }

// async function save(toy) {
//     if (toy._id) {
//         return await httpService.put(`toy/${toy._id}`, toy)
//     }
//     else {
//         return await httpService.post('toy', toy)
//     }
// }

// function getEmptyToy() {
//     return {
//         name: '',
//         price: 0,
//         inStock: true,
//         labels: [],
//         url: ''
//     };
// }