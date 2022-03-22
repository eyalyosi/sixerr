// import axios from 'axios';
// import { httpService } from './http.service';

// axios.defaults.withCredentials = true

import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';



const GIGS_KEY = 'gigs_db';
const CATEGORY_KEY = 'category_db';
_createGigs()
createCatergories()

export const gigService = {
    query,
    save,
    getById,
    createCatergories

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
            {
                category: 'Arts & Crafts',
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
                title: "I will do hyper realistic pencil portrait by hand drawing",
                description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
                price: "₪16.84",
                daysToMake: "2 Days Delivery",
                fullname: "frederick kessie",
                imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                loc: "Ghana",
                memberSince: "Jul 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "1 week",
                rate: "4",
                about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
                reviewers: [
                    {
                        name: "tobiaspille300",
                        country: "Thailand",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
                        review: "frederickkessie ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
                        reviewedAt: "Published 2 months ago"
                    },
                    {
                        name: "liam31",
                        country: "United Kingdom",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                        review: "I requested a slightly earlier delivery on this and once again Frederick came through and provided a fantastic delivery. Thanks so much!",
                        reviewedAt: "Published 3 weeks ago"
                    },
                    {
                        name: "liam31",
                        country: "United Kingdom",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                        review: "Frederick is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
                        reviewedAt: "Published 3 weeks ago"
                    },
                ],
                tags: [
                    {
                        name: "pencil drawing"
                    },
                    {
                        name: "realistic drawing"
                    },
                    {
                        name: "hand drawing"
                    },
                    {
                        name: "portrait drawing"
                    },
                    {
                        name: "pencil sketch"
                    }
                ]
            },
            {
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197422311/original/1907136f4b9684daa164acfa5cfedc6035b771b1.jpg",
                title: "I will do hyper realistic pencil sketch portrait by hand drawing",
                description: "Hey ! Thanks for visiting my gig :)\nIn this gig i'm offering you a very 3 unique, preferable and affordable packages.\nIf you are thinking for giving someone special a very beautiful, eye catching gift( hyper realistic hand drawing pencil sketch portrait)?\nPlease select the desirable package and place your order right now and i'll give you a perfect portrait sketch, hand drawing, realistic drawing,pencil drawing in high resolution JPEG/PNG digital file.\nI will provide hand-drawn black & White or colored realistic portraits.\nKindly provide me clear reference photo as much as possible.\nThe material I used for Creating pencil portraits are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, tombomono eraser, brush, blending stump, mechanical pencil, graphite powder etc .\nYou can give me anything:\nPortrait photos\nFamily photos\nAnimal photos\nAny product photos\nLandscape photos\nArchitecture photos\nAnything you imagine\nPlease contact me before placing your order! Thanks.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITAL FILE, IF YOU WANT THE ORIGINAL ONE THEN MESSAGE ME FOR DETAILS.\nFeel free to ask me anything! :)\nThank You...\nvividstore",
                price: "₪67.37",
                daysToMake: "3 Days Delivery",
                fullname: "vividstore",
                imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83cc7c97f9873bdb052590a94d32f84c-1576419363871/ed47443e-0f9b-42ab-beaf-ec0a0acccfe8.jpeg",
                loc: "Bangladesh",
                memberSince: "Dec 2019",
                avgResponceTime: "1 hour",
                lastDelivery: "about 16 hours",
                about: "Hello, this is Masuk, stand up for vividstore,I am a young and enthusiastic graphic artist and realistic pencil sketch artist. I am certified as graphic designer from George Washington University, USA. I have almost 11 years experience in this field since my university life. I really love to work with Adobe Illustrator, Adobe Photoshop, and so on as a full time online freelancer. And also passionate about sketching. Thank you.",
                tags: [
                    {
                        name: "pencil drawing"
                    },
                    {
                        name: "realistic drawing"
                    },
                    {
                        name: "pencil portrait"
                    },
                    {
                        name: "sketch"
                    },
                    {
                        name: "pencil sketch"
                    }
                ]
            },
            {
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg",
                title: "I will draw a hyperrealistic portrait of face or entire body and animals",
                description: "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
                price: "₪202.11",
                daysToMake: "14 Days Delivery",
                fullname: "andreacarvalho_",
                imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
                loc: "Brazil",
                memberSince: "May 2020",
                avgResponceTime: "1 hour",
                lastDelivery: "3 days",
                about: "Hello! I'm a brazilian artist specialized in hyperrealistic drawings and paintings of human figures and animals, i use a diversity of techniques like Oil painting, dry pastel drawing and pencil. I have over 30 years of experience, check out my portfolio.",
                reviewers: [
                    {
                        name: "rachelrbarnes1",
                        country: "United States",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                        review: "Incredibly grateful for the amazing experience working with you . You are so talented and a kind soul! I highly recommend if you want high quality art to work with her every time",
                        reviewedAt: "Published 1 month ago"
                    },
                    {
                        name: "mark001994",
                        country: "Austria",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
                        review: "The artist was very kind and polite also very fast at the communication. The delivery of the project was on time. And her work is worth the money. I'm really excited about the painting she did. I can truely recommend the Aritst and her work. Big Thanks! :)",
                        reviewedAt: "Published 1 month ago"
                    },
                    {
                        name: "thurstonrobby",
                        country: "United States",
                        flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                        review: "incredible on how precise that art is, picture perfect. 100% amazing job and I will use your services again ...",
                        reviewedAt: "Published 3 weeks ago"
                    },
                ],
                tags: [
                    {
                        name: "pencil"
                    },
                    {
                        name: "drawing"
                    },
                    {
                        name: "portrait"
                    },
                    {
                        name: "realistic"
                    },
                    {
                        name: "painting"
                    }
                ]
            },
        ];
        utilService.saveToStorage(GIGS_KEY, gigs);
    }
    return gigs;
}

function createCatergories() {
     const categories = [{
        name: 'Arts and Crafts',
        txt: 'Outsource your arts and crafts.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/William_Morris_design_for_Trellis_wallpaper_1862.jpg'

    },
    {
        name: 'Data Entry',
        txt: 'Learn your Business',
        img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png'
    },
    {
        name: 'Logo design',
        txt: 'Build your brand',
        img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'
    },
    {
        name: 'Marketing',
        txt: 'Build your brand. Grow your business.',
        img: 'https://www.insegment.com/blog/wp-content/uploads/2016/04/The-Role-of-Marketing-1.jpg'
    },
    {
        name: 'Research and Summeries',
        txt: 'Explore more',
        img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/192053463/original/d52627959e5a21f2f9a104c22c8005a2e898ec0a/write-effective-and-inspiring-articles.png'
    },
    {
        name: 'Translation',
        txt: 'Go global',
        img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png'
    },
    {
        name: 'write linkedin profile',
        txt: 'Start your future',
        img: 'https://resources.biginterview.com/wp-content/uploads/2014/06/woman-linkedin-profile-scaled.jpg'

    },
    {
        name: 'video-explainers',
        txt: 'Engage your audience',
        img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'
    },
    ]
    return categories
}




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