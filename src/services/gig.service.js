// import axios from 'axios';
// import { httpService } from './http.service';

// axios.defaults.withCredentials = true

import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';



const GIGS_KEY = 'gigs_db';
const CATEGORY_KEY = 'category_db';
_createGigs()
// createCatergories()

export const gigService = {
    query,
    save,
    getById,
    createCatergories
}

function query(filterBy = {}) {
    return storageService.query(GIGS_KEY, filterBy);
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
                _id: "100",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
                    "https://portraitdraw.com/wp-content/uploads/2021/05/003.jpg",
                    "https://i.pinimg.com/originals/95/ba/14/95ba14518596e7891ca3fa7ff36704eb.jpg",
                    "https://webneel.com/daily/sites/default/files/images/daily/09-2018/6-pencil-drawing-deniro-canavarro.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/109754959/original/6ceb082aeb372a59867d8379ef07a7238f2f7cf9/draw-beautiful-realistic-pencil-portrait.jpg"
                ],
                title: "I will do hyper realistic pencil portrait by hand drawing",
                description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
                price: 16.84,
                owner: {
                    _id: "u100",
                    fullname: "frederickkessie",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                    level: 2,
                    rate: 4
                },
                loc: "Ghana",
                memberSince: "Jul 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "1 week",
                daysToMake: 3,
                about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
                category: "arts and crafts",
                tags: [
                    "pencil drawing",
                    "realistic drawing",
                    "hand drawing",
                    "portrait drawing",
                    "pencil sketch"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "101",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
                    "https://portraitdraw.com/wp-content/uploads/2021/05/003.jpg",
                    "https://i.pinimg.com/originals/95/ba/14/95ba14518596e7891ca3fa7ff36704eb.jpg",
                    "https://webneel.com/daily/sites/default/files/images/daily/09-2018/6-pencil-drawing-deniro-canavarro.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/109754959/original/6ceb082aeb372a59867d8379ef07a7238f2f7cf9/draw-beautiful-realistic-pencil-portrait.jpg"
                ],
                title: "I will do hyper realistic pencil portrait by hand drawing",
                description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
                price: 16.84,
                owner: {
                    _id: "u101",
                    fullname: "frederickkessie",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                    level: 2,
                    rate: 4
                },
                loc: "Ghana",
                memberSince: "Jul 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "1 week",
                daysToMake: 3,
                about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
                category: "arts and crafts",
                tags: [
                    "pencil drawing",
                    "realistic drawing",
                    "hand drawing",
                    "portrait drawing",
                    "pencil sketch"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "102",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/155512325/original/d3dae576b9abcc7f25ff755d5e18120fd3b1c67a/draw-a-hyperrealistic-portrait-of-face-or-entire-body-and-animals.jpg",
                    "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/BobxzqGjJZP-png__880.jpg",
                    "https://i.pinimg.com/736x/8d/b6/0e/8db60e98d5740f89e0412d9d5d5ed90c.jpg",
                    "https://thumbs.dreamstime.com/b/hyper-realistic-monochrome-portrait-cat-yellow-eyes-isolated-white-background-211099707.jpg"
                ],
                title: "I will draw a hyperrealistic portrait of face or entire body and animals",
                description: "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
                price: 202.11,
                owner: {
                    _id: "u102",
                    fullname: "andreacarvalho_",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
                    level: 1,
                    rate: 5
                },
                loc: "Brazil",
                memberSince: "May 2020",
                avgResponceTime: "1 hour",
                lastDelivery: "3 days",
                daysToMake: 1,
                about: "Hello! I'm a brazilian artist specialized in hyperrealistic drawings and paintings of human figures and animals, i use a diversity of techniques like Oil painting, dry pastel drawing and pencil. I have over 30 years of experience, check out my portfolio.",
                category: "arts and crafts",
                tags: [
                    "pencil",
                    "drawing",
                    "portrait",
                    "realistic",
                    "painting"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "103",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/155512325/original/d3dae576b9abcc7f25ff755d5e18120fd3b1c67a/draw-a-hyperrealistic-portrait-of-face-or-entire-body-and-animals.jpg",
                    "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/BobxzqGjJZP-png__880.jpg",
                    "https://i.pinimg.com/736x/8d/b6/0e/8db60e98d5740f89e0412d9d5d5ed90c.jpg",
                    "https://thumbs.dreamstime.com/b/hyper-realistic-monochrome-portrait-cat-yellow-eyes-isolated-white-background-211099707.jpg"
                ],
                title: "I will draw a hyperrealistic portrait of face or entire body and animals",
                description: "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
                price: 202.11,
                owner: {
                    _id: "u103",
                    fullname: "rashin07",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1fe02234f0b300905f098d1c2eef2599-1621414093019/30dd09bd-748a-49c0-b3bc-ee3071bdfadb.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "Bangladesh",
                memberSince: "Feb 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "about 12 hours",
                daysToMake: 1,
                about: "Hello! This is Rashin Faria, a Data Entry Specialist & Virtual Assistant at your service. I have excellent experience in Data Entry, Data Processing, Data Uploading, MS Word/Excel, Google Spreadsheet, PDF, Web Research, Ecommerce Product Entry, Data Scraping and others. With a 24/7 supporting team we work together for the betterment of the projects. We have extensive experience to do our project very fast and professionally. Client satisfaction is our first priority. Order Now! Regards Rashin Faria",
                category: "data entry",
                tags: [
                    "web research",
                    "manual typing",
                    "data entry",
                    "copy paste",
                    "product listing"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "104",
                image: ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128385654/original/7409f9154c0c92f1376f1c090f614aa6ed22b3f2/do-data-entry-macros-in-excel.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/128385654/original/b35185bc2ec0760e68658863e3def7a653b922d4/do-data-entry-macros-in-excel.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/128385654/original/172c50f3c8f0be4ff746171721832115ca6c4c80/do-data-entry-macros-in-excel.png"
                ],
                title: "I will do data entry,web research and lead generation work in excel",
                description: "Looking for an experienced data entry expert? don't waste your time, just hire me and relax.\nWe are team of qualified professionals for guaranteed high quality work to our clients\nI will provide professional data entry work, data collecting from web, table graphs and all type of internet research like research related to businesses, companies information and enter into excel within fastest possible time.\nWhether you have big project like thousands of rows entries in excel or very tiny project like minutes of work, i'm here to provide you highly satisfied experience for your project.\nHere are the services we offer:\nData Entry\nWeb Research\nLead Generation\nCopy Paste Work\nCompanies Data Research\nInternet Research\nData Conversion into Excel\nTyping in Excel\nProperty Research\nCopy Paste Work\nPDF to Excel\nFormatting of excel sheets\nWhy hire me?\nGuaranteed quality work\nAll time communication during the project within Fiverr\nQuick Turnaround\nI will give my best and 100% to the project\nI can provide sample for the satisfaction before the order\nFeel free and don't hesitate to contact us for superior work\nNote: All communication and payment should be done via the fiverr platform.",
                price: 67.37,
                owner: {
                    _id: "u104",
                    fullname: "waqarcreatives",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7928a9bdb9e68c7dcc870f7dac91d92b-768025031598387384699/JPEG_20200826_012943_1616096493516260103.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "Pakistan",
                memberSince: "May 2019",
                avgResponceTime: "1 hour",
                lastDelivery: "3 days",
                daysToMake: 1,
                about: "Hello fiverr community,my name is Muhammad Waqar and i'm here to help you with your lead generation, web research and data entry projects. We are a group of experts which work together for the betterment of the projects we take from our clients. So don't forget to reach out me for your next project. Thank you very much",
                category: "data entry",
                tags: [
                    "web research",
                    "data entry",
                    "lead generation",
                    "data entry excel",
                    "data entry typing"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "105",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156250659/original/694e80206bfd8cebf4e950fd073d382ed0fcd20a.jpg",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0dcf7cc6e2c0c9df2f8b6a405e14d765-1602184675/Capture/do-web-website-scraping-web-data-scraper-copy-paste-email-list-email-extraction.PNG",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/138173665/original/1d5ca8a0103ccd7ad5bd0253ad8a88665fb76d63/clean-your-excel-contact-database.jpg",
                    "https://fiverr-res.cloudinary.com/images/w_1260,q_auto,f_auto,pg_1/attachments/delivery/asset/0860b7c1e08acdc5fc035da9124ebb5e-1630382371/Buckeye%20Tuesday/clean-your-excel-contact-database"
                ],
                title: "I will do data entry, copy paste and excel data entry work for you",
                description: "Hi, Welcome to my Gig page on Fiverr.com!\nNote: Please contact me first before placing an order to check the availability and price estimate of your project.\nDescription:\nDo you need a perfect and professional virtual assistant for Data Entry,Excel Data Entry, Copy Paste Work, Typing Work , Data mining, Data collection using MS Excel, MS Word, Google Spreadsheet or Google doc? Yes, you are in the right place. Please check out my expertise below and the gig extras I'm offering.\nData Entry\nCopy Paste Work\nExcel Data Entry\nProduct Listing\nShopify Product listing\nCRM Data Entry\nData Scraping\nData Conversion\nPDF to Excel or Word\nJPEG to Excel or Word\nTyping in Excel or Word\nBusiness Card Entry\nWordPress Data Entry\nE-commerce Products Listing\nWeb Research and Web Scrapping\nData Collection from Linkedln/Instagram\nProperty Research, Public Record Search\nReal Estate Research and Data Entry (Name, Email, Phone, Address, etc)\nWhy trust me?\nPositive Customer Reviews\nQuick Reply.\nOn-time delivery\nQuality Customer Support\nEfficient time of working\nP.S. - We don't deal with anything outside of Fiverr. Never share your personal information. Thanks!",
                price: 33.68,
                owner: {
                    _id: "u105",
                    fullname: "masum245",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8a1623fd3276ad7297d7647a8727bdf0-1589096119095/6c637953-9dc0-4c9c-b04d-c13c947fdc43.jpg",
                    level: 3,
                    rate: 5
                },
                loc: "Bangladesh",
                memberSince: "Dec 2018",
                avgResponceTime: "1 hour",
                lastDelivery: "3 days",
                daysToMake: 1,
                about: "I've been working as a Data entry operator for many years. I have a big team with so many professional people for managing data entry tasks. We believe that high quality and customer satisfaction is the most important thing for us. Feel free to drop a message for discussing your needs and objectives.",
                category: "data entry",
                tags: [
                    "typing job",
                    "excel data entry",
                    "virtual assistant",
                    "data entry",
                    "copy paste"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "106",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199776653/original/b710f145db1a54491e2d777831107c0174c78565.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/20598517/original/c7d2f4ed6fd4dacb3a459e126c3426fc8737254e/do-excel-or-pdf-to-excel-data-entry.png",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/5c72ccb3fe9441ef7f40c1c000162dc5-1647349433/Capture/do-excel-or-pdf-to-excel-data-entry.PNG",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ebe85fb999f187268295a7616e2a1055-1646603243/Capture/do-excel-or-pdf-to-excel-data-entry.PNG",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0b2e02db566a9e91e421cc14c205a8ca-1645225746/Capture/do-excel-or-pdf-to-excel-data-entry.PNG"
                ],
                title: "I will do excel data entry, copypaste, and any type of data entry",
                description: "I will do excel data entry, copy paste, and any type of data entry\nHello, Welcome to my Gig. Are you looking for a professional virtual assistant for, Excel Data Entry, Typing Work Copy Paste Work, Data Entry, Data collection, Data mining, using MS Word, MS Excel, Google doc, or Google Spreadsheet? Then, you are at the right place. Following are the services that I'm offering.\nExcel Data Entry\nCopy Paste Work\nShopify Product listing\nProduct Listing\nData Entry\nData Conversion\nData Scraping\nJPEG to Excel or Word\nPDF to Excel or Word\nTyping in Excel or Word\nWordPress Data Entry\nWeb Research and Web Scrapping\nE-commerce Products Listing\nProperty Research, Public Record Search\nData Collection from LinkedIn/Instagram\nReal Estate Research and Data Entry (Name, Email, Phone, Address, etc.)\nWhy chose me?\nExtra fast delivery\n100% Quality assurance\nlowest possible rates\nQuick Reply.\nUnlimited Revisions to make sure Maximum customer satisfaction\nData Security\nPlease contact me before placing an order and get my free consultancy about the project how to do it in the best possible way. Also If you need sample work Please feel free to demand.\nThanks & Regards,\nAbrar Hussain",
                price: 16.84,
                owner: {
                    _id: "u106",
                    fullname: "abrar_029",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8a1623fd3276ad7297d7647a8727bdf0-1589096119095/6c637953-9dc0-4c9c-b04d-c13c947fdc43.jpg",
                    level: 3,
                    rate: 5
                },
                loc: "Pakistan",
                memberSince: "Feb 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "3 days",
                daysToMake: 1,
                about: "I'm glad you're here! My name is Abrar Hussain. I’m a professional Transcriptionist and data entry expert. I’ve a BS degree in Mechanical engineering. From last more than three years, I’ve been working as a Data entry operator and English language transcriptionist. To me, customer satisfaction and providing the best quality work are always my top priorities. I’m really good at MS Office and Transcript. Get yourselves a skillful creator and professional Assistant by simply contacting me. So, drop a message, and let's get started. I am also available for long term projects. Thanks!",
                category: "data entry",
                tags: [
                    "excel data entry",
                    "virtual assistant",
                    "data entry",
                    "copy paste",
                    "typing jobs"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "107",
                image: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/lrceizjt7bnvlvkd8dbo.png",
                title: "I will create a sales whiteboard video",
                description: "Kindly contact me for orders above 90 seconds.\nWhat does my package include?\nMotion whiteboard video\nScriptwriting (Additional $50 per 150 words)\nVoice over; Male & Female(English and German)\nBackground music & imagery\nHD Video\nColored whiteboard\nCommercial Rights (Additional $20)\nBroadcast Rights (Additional $50)\nNote: Voice-over is available in German, US English, and UK English.\n.\n.\n.\nBitte kontaktieren Sie mich für Bestellungen über 90 Sekunden.\nWas beinhaltet mein Paket?\nMotion Whiteboard Video\nDrehbuchschreiben (Zusätzliche €50 pro 150 Wörter)\nVoice-over; Männlich & Weiblich (Englisch und Deutsch)\nHintergrundmusik und Bilder\nHD-Video\nFarbiges Whiteboard\nKommerzielle Rechte (Zusätzliche €20)\nÜbertragungsrechte (Zusätzliche €50)\nHinweis: Voice-Over ist in Deutsch, US-Englisch und UK-Englisch verfügbar.",
                price: 269.48,
                owner: {
                    _id: "u107",
                    fullname: "allesanimation",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ba950f423b857c85340d9e0f22e57bce-1624271979495/ce05a5ca-dcd2-406a-8a20-e41bcb0a429c.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "Germany",
                memberSince: "Jun 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "about 23 hours",
                daysToMake: 3,
                about: "Welcome! My name is Gregoria. I am an experienced Marketer that loves to spice up whatever you bring to the table. With many years of marketing, and over 8 years of Video Advertising, I will help your enterprise get a high level of Attraction, Interaction, and of course, Sales; through Animation. I and my team work FULL TIME on Fiverr to guarantee quick, and excellent Animation videos.",
                category: "video explainers",
                tags: [
                    "whiteboard video",
                    "explainer video",
                    "explain"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "108",
                image: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/efora4o9znelgccz7fkq.png",
                title: "I will create professional 2d animation explainer video",
                description: "Are You Looking For A 2d Animation Explainer Video For Your Website, Product Or Service?\nWe Offer High Quality Video With Quick Turnaround Time Which Ensures Your Business Gets The Engaging Audience And Profit Turn Around.\nNeed Explainer Animation In Spanish (Español) ? German (Deutsch)? Italian (Italiano) ? No Problem! We Understand All Languages.\nWhat You Will Get And Each Package?\n• Fantastic 2d Animation\n• Full Hd 1080p\n• Background Imagery\n• Background Music\n• Professional Voice-over\n• Unlimited Revisions\nScript Writing Services Are Also Provided.\nIf You Have Any Custom Work Or Do You Have Any Storyboard Please Contact Me Before The Order For Custom Order\nBest Regards\nAMA",
                price: 101.05,
                owner: {
                    _id: "u108",
                    fullname: "ama_studio1",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/18ecf7c17fc8aa50d64b8a89c500a5ad-1612199164491/1963fa7b-062c-4c52-a26d-30473a2d3fad.png",
                    level: 1,
                    rate: 5
                },
                loc: "Pakistan",
                memberSince: "Feb 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "about 9 hours",
                daysToMake: 2,
                about: "Hello Welcome to AMA Studio. If You are looking for Explainer video or Want to share your Story With World in Creative Way Or Maybe you launched a music and thinking about a video for it well you came to the right place, here in ama studio we provide professional animation with 3 different styles, we also provide scriptwriting and professional voiceovers with multiple gender and multiple accents so what are you waiting for Contact us Now.",
                category: "video explainers",
                tags: [
                    "explainer video",
                    "2d animation",
                    "2d animation video",
                    "cartoon animation",
                    "promotional video"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "109",
                image: "https://fiverr-res.cloudinary.com/video/upload/so_26.270999,t_gig_cards_web/tfl3oturwkkl0qp55kmf.png",
                title: "I will create a professional whiteboard animation",
                description: "Hii, Welcome to my Whiteboard Animation Video Gig!\nIn this gig, I'll Create the Most EYE-CATCHING whiteboard animation videos tailored to fit your needs.\nThese unique whiteboard Explainer videos for your brand Or business will help to increase your sales and it will definitely create a unique impression on your clients by making them engaging.\nyou'll Get:\n1. The most Unique Explainer Videos compared to other normal whiteboard videos\n2. Fully Colored Videos\n3. Unlimited Revisions Until you're Satisfied\n4. High-Quality Delivery\n5. Fast Communication\n6. All Niche Available\n7. 100% Satisfaction Guaranty\n8. Moneyback Guaranty\n**************\nIf you need custom drawings please check my other gig! or Feel Free to Ping me We'll discuss it : )\nI'm also providing Voiceover and Script Writing Services Please check the extras for the same...\nKindly ensure all required information is readily available before ordering.\nStill, Have Questions?\nFeel Free to contact me Anytime I'm Always here to help you : )\nLooking forward to receiving your Order...\nRegards\nArnold",
                price: 16.84,
                owner: {
                    _id: "u109",
                    fullname: "encrypt99",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aa1d8903ba72305648ba75fc6e81d9b7-1633524346738/5f95f4e0-24ca-4a86-8860-d01d81fd7c4a.jpg",
                    level: 2,
                    rate: 4
                },
                loc: "Nigeria",
                memberSince: "Jun 2012",
                avgResponceTime: "1 hour",
                lastDelivery: "1 day",
                daysToMake: 1,
                about: "Hi my name is Arnold! I enjoy marketing, i specialize in graphics, especially memes, white board animation and explainer videos. Check out my gigs and feel free to contact me for any other needs! Customer Satisfaction over everything! 100% Rating!!!",
                category: "video explainers",
                tags: [
                    "whiteboard video",
                    "explainer video",
                    "whiteboard explainer",
                    "white board",
                    "whiteboard animation"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "110",
                image: "https://fiverr-res.cloudinary.com/video/upload/so_4.985944,t_gig_cards_web/llttjkqfxz0ybon92ifg.png",
                title: "I will create an eye catching whiteboard animation digital hand drawn",
                description: "ENGAGE YOUR AUDIENCE!!!\nwith your own whiteboard animated doodle video\nULTRA FAST 48 Hours turn-around available\nPUT YOUR VIDEO MARKETING ON STEROIDS\nWe`ll create a fantastic speed-draw or whiteboard animation of any logo, picture, script or text\nWhat you get for $35:\n30-second video with voice over recording\nImages from our Exclusive Hand Drawn Library + 2 Custom Drawings\nBackground Music\nYou must Provide the Script for the video - Up to 75 words\n1080p Video in MP4 or any video format you need\nExtras Available\nFull HD 1920x1080 Delivery\nFast Delivery\nScript Writing\nWatermark\nColor\nSubtitles\nIf you have other requirements just contact us and we´ll reply soon.\n100% Satisfaction Guaranteed\nYour satisfaction is important to us.\nORDER NOW!\nATTENTION - Projects of 300+ words, contact me for a quote and timeframe first.",
                price: 117.90,
                owner: {
                    _id: "u110",
                    fullname: "bnn_marketing",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ee46166ba8c4ab29d551cb80bf88815e-1600882516719/10098270-e9f3-4ee8-b9f4-2c70cc457dd9.JPG",
                    level: 1,
                    rate: 5
                },
                loc: "Argentina",
                memberSince: "Dec 2012",
                avgResponceTime: "2 hours",
                lastDelivery: "about 2 hours",
                daysToMake: 2,
                about: "Online Marketing professional with 20 years of experience. After running websites, paid-ads, blogs, and e-shops, in 2012 it was clear that video was essential for Internet Marketing and I began creating whiteboard and animated explainers, which quickly became a passion. I decided to start offering those services to others on Fiverr and since then I have gathered a great team of artists in order to provide quality animation work at affordable prices.",
                category: "video explainers",
                tags: [
                    "doodle",
                    "explainer video",
                    "whiteboard animation",
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "111",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232298461/original/e2872bd49bcb0a344ca35cae4e6a858dbf794fb7.png",
                title: "I will translate english to hebrew and hebrew to english",
                description: "Hello and welcome to my gig!\nI am Shiran and I have 3 years of experience in translations and 6 years of writing experience (Hebrew and English). I make a high-quality, accurate translations from Hebrew to English and English to Hebrew. I DO NOT USE GOOGLE TRANSLATE.\nI can translate any topic and many types of content. I will translate almost any text, article, book, social media posts, subtitle and even websites.\nNo technical or legal translation or transcription.",
                price: 84.20,
                owner: {
                    _id: "u111",
                    fullname: "shiranmor17",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2077b8d6eeb98061673b868ec51a9267-1636915857681/b31b149f-5e31-46bd-9a2e-27e94cc3e5e2.jpeg",
                    level: 2,
                    rate: 4
                },
                loc: "Israel",
                memberSince: "Nov 2021",
                avgResponceTime: "2 hours",
                lastDelivery: "1 week",
                daysToMake: 2,
                about: "Hi guys! I am a native level speaker (reader, writer, typer, dreamer) of Hebrew and English, and I live in beautiful Israel. I can translate English to Hebrew and Hebrew to English, for any type of content you need - articles, blog posts, social media posts, ads, books, presentation, reports and many more. I am SUPER organised and LOVE what I do. So let's start working on your projects! Contact me :)",
                category: "translation",
                tags: [
                    "hebrew to english",
                    "accurate translation",
                    "english to hebrew",
                    "hebrew",
                    "translation"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "112",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3296856/original/767ea5cb0ccd4893231d198cbd1e7a82a42d1faf.jpg",
                title: "I will perfectly translate from russian to english or from english to russian",
                description: "**The one and only Top Rated Seller with flawless Russian as the mother tongue (34+ years in Moscow)**\nOn this page, you can order professional and flawless Russian to English translation and English to Russian translation by a native and experienced Russian and English translator.\nI work in the field of Russian to English and English to Russian translation since 2009 and have successfully received a diploma with honors and a Master of Arts degree in Spanish and English.\nIn case if you are looking for perfect quality at the best price, I am your best choice!\nI offer the following:\n- An individual approach for every customer\n- My goal is quality, and I will never make something average just to finish it as fast as I can\n- Free correction after implementation is offered for all the orders\n- Flexible rules and ultimate solutions for my customers\n- I research translated topics, reading articles and related websites in order to get the context\nI have vast experience in Russian and English translation of\n- religious documents\n- whitepapers (ICOs)\n- software\n- games\n- websites\n- CMS\n- agreements\n- manuals\n- subtitles\nand other materials\nOrder Russian and English translation",
                price: 50.52,
                owner: {
                    _id: "u112",
                    fullname: "vovkaslovesnyy",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3232052/original/1484208202021_Profile.png",
                    level: 2,
                    rate: 4
                },
                loc: "Russia",
                memberSince: "Jun 2014",
                avgResponceTime: "2 hours",
                lastDelivery: "about 14 hours",
                daysToMake: 2,
                about: "In 2014, I joined Fiverr to offer professional Russian to English and English to Russian translation services. I hold a Master of Arts degree in Spanish and English and graduated from Russian Military University in 2009. I worked in Uganda, Thailand, Russia, and several other countries, and I'm open to all cultures and nations. I have huge experience in the field of Russian and English philology. I really love dogs because they are my life and my passion... especially Dobermans ^__^. Hire me and unleash the power of Russian military translator and interpreter.",
                category: "translation",
                tags: [
                    "english to russian",
                    "russian to english",
                    "translate",
                    "russian",
                    "translation"
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "113",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129378192/original/accecd46dd68bf0eae72b5c91db4edc34c625cd3.jpg",
                title: "I will provide a professional manual english to french translation",
                description: "Who am I?\nI'm a French native translator (copywriter) born in Paris working as a freelancer since 2008 for well-known clients and agencies (KAYAK, L'EXPRESS, Expedia). If you've been looking for a French translator that'll actually make your translation accurate (english to french translation & french to english), you've just found him.\nI will :\nTranslate from English to French and French to English\nMake it sound natural (localization)\nFor resumes, documents, PDFs, and Amazon listing please message me first.\nWhy should you choose me?\n\"We highly recommend Alexis. He read the guidelines carefully and provided a top-quality output. And now he is working on another project with us.\" L'EXPRESS (Black Friday content)\n\"Alexis was very willing to take on new work, responded fast to messages, and finished the work ahead of schedule. He is open to changes and very flexible. I recommend him for any French translation work.\" KAYAK\nI've written and translated content into French / English for small businesses, entrepreneurs at all levels, Fortune 100 and tech giants, as well as celebrities and bestselling authors.",
                price: 33.68,
                owner: {
                    _id: "u113",
                    fullname: "quantz75",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aeb50869a3c9aa4f4d01a4a5076780d8-1597753670171/66b99c65-4308-4b81-a088-b0610d5d75b6.jpg",
                    level: 2,
                    rate: 4
                },
                loc: "France",
                memberSince: "Sep 2018",
                avgResponceTime: "2 hours",
                lastDelivery: "about 2 hours",
                daysToMake: 2,
                about: "French native translator/copywriter born in Paris & I grew up in the U.S. If you've been looking for a writer that'll actually get you results, you've just found him. Some of my clients: Kayak, L’Express (black Friday event), Viral launch, publishing companies, etc...",
                category: "translation",
                tags: [
                    "french to english",
                    "translate french",
                    "english to french",
                    "french translation",
                ],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "114",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217112898/original/2857822ef954d4d7305529500a3b9ab3eee33a0c.png",
                title: "I will translate your website french to english, english to french",
                description: "I will translate all translations sent to me within 12 hours. I can translate French to English and English to French.\nTranslations completed by a Bilingual French & English speaker and an experienced translator. I have extensive experience translation all kinds of projects.\nIf you have any questions, please send a message am I will get back to you ass soon as possible. If you have a larger project to do, don't hesitate to get in contact and we can find a solution that works for you.\nPlease send a message so I can send you a custom order.",
                price: 50.52,
                owner: {
                    _id: "u114",
                    fullname: "moremarks",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c7335c7b5aa8d880333495ef8f4bbee5-1617624531791/a2fc714b-c261-490d-b93a-af081a385234.png",
                    level: 2,
                    rate: 4
                },
                loc: "United Kingdom",
                memberSince: "Apr 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "5 days",
                daysToMake: 2,
                about: "We are a small team consisting of bilingual English, French and Spanish speakers. We have extensive experience translating all kinds of documents ranging from academic essays to business reports, subtitles and scripts to short novels. We ensure all of our projects are completed with the highest degree of quality and our dedicated approach means that your translated document will be a perfect version, with attention paid over the register and vocabulary used.",
                category: "translation",
                tags: ["french to english", "english translation", "translation", "french translation",],
                likedByUsers: ['mini-user'] // for user-wishlist : use $in
            },
            {
                _id: "i201",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3171448/original/a41a38f3733bb97279a49d1449f7337dece50693.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/3171448/original/ea501ccb65e76b625ec7b5fa446dcdfbd0598656/create-3-original-logo-with-vector-source-file.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/3171448/original/0b0a2315a2a8ec935c24823b67e72f984cb82823/create-3-original-logo-with-vector-source-file.jpg",
                    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/fc6bad077adb7ba2c5dd03715e70e90a-1647414752/34655_FoundationsCapital_RD_SR_MV-Mockup-01/create-3-original-logo-with-vector-source-file.jpg",
                    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/00dceba1ae1ef166139dc430966fc0c9-1647083632/34670_PossibleChairs_AK-Mockup-03/create-3-original-logo-with-vector-source-file.jpg"
                ],
                title: "I will design 3 modern minimalist flat logo designs",
                description: "Hi there ! Thanks for stopping by !!\nA Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.\nMy portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh\n★ Why Us? ★\nTalented Logo Maker Team\nFully custom made, creative, original, UNIQUE and AWESOME designs\nProfessional customer support 24/7\nHigh Quality work\n100% money back policy if not satisfied\n★ WHAT DO YOU GET? ★\n✔ Highly Professional, UNIQUE & High Quality designs\n✔ UNLIMITED revisions until u r 100% satisfied\n✔ Fast turn around time 24 to 48 hours only.\n✔ 100% original & unique vector design from Adobe Illustrator\n✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality work\nIf you have any question,\nFeel free to★ Contact Me! ★I'll be happy to help !\nLet's get started!\n-Your Logo Maker",
                price: 33.68,
                owner: {
                    _id: "u201",
                    fullname: "frederickkessie",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                    level: 4,
                    rate: 3
                },
                loc: "India",
                memberSince: "Jun 2014",
                avgResponceTime: "2 hours",
                lastDelivery: "about 3 hours",
                daysToMake: 3,
                about: "Hello! My name is VD. I am a connoisseur of art and music. I love being around nature and my pets. I have a team of professional graphic designers with an experience of 8+ years. We specialize in logo designing. We're available exclusively on fiverr to rock your world with our designing skills. Come and experience it for yourself!",
                category: "logo",
                tags: ["minimalist", "flat", "logo design", "modern", "unique", "logo maker"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i202",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/107567748/original/17dd1566f290bd2a05c6df8fa081e8722a5c8729.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/107567748/original/cc15471873620244077e56ab1f2dcd4d47f003c8/do-logo-design-with-in-24-hours.jpg",
                    "https://fiverr-res.cloudinary.com/image/upload/w_1260,q_auto,f_auto,pg_1/20210118/Top%20Best%20Logo%20designs%202020%202021%20modern%20minimalist%20sensational%20unique%20logo%20design%20professional%20unique%20feminine%20logo%20creative%20flat%20exclusive%20express%20website%20wordpress%20%20anroid%20icon%20iconic%20logo%20design_zrxl0q",
                    "https://fiverr-res.cloudinary.com/image/upload/w_1260,q_auto,f_auto,pg_1/20220224/Professional%20business%20logo,%20Professional%20business%20logo%20design,%203D%20logo%20design,%20custom%20logo%20design,%20real%20estate%20logo%20design,%20branding%20guide,%20minimalist%20logo%20design,%20luxury%20and%20simple%20logo%20design,%20sensational_ylbb9j",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3ca376a8342973fbdacc9aebf90763bc-1646893432/p3/do-logo-design-with-in-24-hours.jpg"
                ],
                title: "I will create modern unique and creative logo design",
                description: "Hi esteemed buyer!\nLooking for modern unique and creative 2d or 3d logo design? Yes, you're at the right place.\nHaving a vast experience with hundreds of satisfied customers across the globe, I extend my services to design modern unique and creative logo design to represent your brand idea in a befitting manner.\nWhat proves my individuality over others?\nQuick delivery, quality work and transforming your brain idea into a 3d creative unique and modern logo design are my attributes.\nMY GIG OFFERINGS ARE:\nBest customer care\nRevisions within 24 Hours\n100% satisfaction guaranteed\nModern unique and creative designing ideas\nLogically and aesthetically hypnotizing logos\n1 free revision after completion of order\nEditable and re-sizeable vector files\nFont download link included\nHigh resolution final files in zip\nNote: For Complex Illustrations and Mascots, please discuss in inbox before placing order! It is also not included in our packages.\nHave queries? Contact us in inbox anytime!\n★Hearing from you would be an absolute pleasure, Go ahead and ORDER NOW!★",
                price: 84.20,
                owner: {
                    _id: "u202",
                    fullname: "soduzai_gfx1",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg",
                    level: 4,
                    rate: 3
                },
                loc: "Pakistan",
                memberSince: "Oct 2017",
                avgResponceTime: "1 hour",
                lastDelivery: "about 25 minutes",
                about: "I am a professional graphics designer from PakIsTaN... Designing is not only my job, it's my Passion. All I need from you is a rough sketch of your idea. Then you can just relax and see the magic happening. Not only you'll get stunning and professional designs, but also you'll have top class custome",
                category: "logo",
                tags: ["minimalist", "flat", "logo design", "modern", "unique", "logo maker"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i203",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125798593/original/fea4f6af37e201fa9cb71a85583fedc171da2a26.jpg",
                title: "I will design 3 modern minimalist logo design",
                description: "ModernMarvel heartily welcomes you to Minimalist Modern Logo Design gig.\nWe are Brand Creators and professional business consultants. Each business has his own story to tell and having high recall value is prime purpose behind getting a LOGO. Thus, We believe in creating simple yet effective masterpiece which blown away your customers mind.\nYour idea of getting Modern memorable and attractive logo design is just one step away. So, Lets discuss and choose a best design for your business.\nOur recommendation BRANDING PACK @ $65 ONLY:\n5 BRANDED logos with minimal designs + vector source files\nAttractive Social media covers (FB + Twitter)\nProfessional stationery design (B card + letterhead)\nUnlimited revision rounds\nExclusive customer support\nRefund & Package selection guidelines:\nIf the designs are as per your initial shared brief, refund wont be a possible option. You can ask for revision if i missed out anything.\nMy samples are from my premium / standard package.\nWe are closed on Sunday.\nMy key skills:\nMinimalist Modern Logo Design | Minimal | Modern | Typography | Line art | Custom logo | Vintage |\nKeen to Get Started!",
                price: 50.52,
                owner: {
                    _id: "u203",
                    fullname: "modernmarvel",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d366617946e54cbc9aa114f27259e3ef-1552848300306/3c155f72-15c9-47d0-8f68-b75a519a7999.jpg",
                    level: 4,
                    rate: 3
                },
                loc: "India",
                memberSince: "Mar 2019",
                avgResponceTime: "2 hours",
                lastDelivery: "about 22 minutes",
                about: "I am a professional artist having rich experience in hand sketched and digital artwork. I have served tons of businesses with smarter business solutions. I am here to get the global exposure and would like to contribute more towards our creative community. Thanks.",
                category: "logo",
                tags: ["minimalist", "flat", "logo design", "modern", "unique", "logo maker"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i204",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157827646/original/8f14f50a81ddd1a60b4af990ea5154a26975d150.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/238318178/original/a91619b8820c722dbd20e77506bb2f12be35c314/write-an-attractive-instagram-bio-with-free-hashtags-for-you.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/238318178/original/7a95376df49d1f75d75d78a625f0a53aa4533f23/write-an-attractive-instagram-bio-with-free-hashtags-for-you.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/175521564/original/16e7d2dc1c05af1f56ddef9399131329e4d473ce/write-you-a-smart-instagram-bio.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/207255299/original/9304a69972a78f1224211c7fdb5d074f311fa7ee/write-and-optimised-attractive-bio-for-your-instagram-profile.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/207255299/original/920c950327633ff2e6a7874f2044c7d1cf80f01b/write-and-optimised-attractive-bio-for-your-instagram-profile.png"
                ],
                title: "I will write you an attractive instagram bio",
                description: "The FIRST thing a potential follower sees on your page is your bio.\nStand out, and build trust with a bio that informs and captivates everyone who views it. This will not only attract new people to your page, but it will keep them there!\nYou've seen those profiles on Instagram that look amazing, and you deserve that for your business too.\nGet the Instagram bio you need, and with it, more followers and clients!\nWhat you'll receive:\n⭐ One unique, professionally designed bio\n⭐ A captivating layout that engages your viewers\n⭐ A call to action, if required\n⭐ 24 hour delivery\n⭐ 100% Satisfaction Guarantee\nLet's build you a great Instagram page that is sure to bring AND KEEP followers.\nIf you BUY a gig from me always feel free to request a revision if you need any part of your order revised. Thank you.",
                price: 50.52,
                owner: {
                    _id: "u204",
                    fullname: "bellavida123",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9e2d7f453419c08e138fbfe9e65347df-696051281638594671.588431/DD8E6DDC-C231-47D3-B61A-97274452D3BF",
                    level: 4,
                    rate: 3
                },
                loc: "Jamaica",
                memberSince: "May 2018",
                avgResponceTime: "1 hour",
                lastDelivery: "about 23 hours",
                about: "Thanks for stopping by! I'm a Social Media Specialist with 8+ years experience. I can help with all your Social Media related tasks! Send me a message. Let's get it done!",
                category: "marketing",
                tags: ["bio", "instagram marketing", "instagram", "social media", "social network"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i205",
                image: ["https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/jylhbgosxfqilptpru24.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/181368380/original/ab039d24df481cd94127f88cd5b5bcebb9241250/we-will-create-an-effective-instagram-hashtag-growth-strategy.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/181368380/original/0aab76fa8a9ae80b7c8ef1cb0a3d44c683fa70d9/we-will-create-an-effective-instagram-hashtag-growth-strategy.jpg",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/631a45106aebed1cabe6afbf3a0c919d-1626020644/Hashtag%20Guide%20Sample%20Picture/find-perfect-hashtag-and-grow-you-instagram-fast.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/228035434/original/499c9fb6b5df695db317fe8f680b4a88b8be6c28/create-an-effective-hashtag-strategy-for-instagram-facebook-organic-growth.png"
                ],
                title: "I will create an effective instagram hashtag growth strategy",
                description: "Why me?\nI have worked with Fortune 500 brands such as Adidas, L’Oreal, Xiaomi & Pfizer on numerous marketing and branding campaigns.\nI’ve successfully delivered 4000+ hashtag strategies with over 2600+ happy clients to help them achieve organic instagram growth.\nWhy my service?\nI will strategically research, analyze & handpick best-performing hashtags tailored to your Instagram account. I will teach you:\n✅ How you can effectively use hashtags to rank and grow organically\n✅ How to avoid bad hashtags to avoid negative growth\n✅ Stand out from your competition and increase your sales\n✅ How to increase traffic and conversion organically\n✅ Account optimization and posting secrets to gain new Instagram followers\nWhat will you get?\n✅ Data-backed high-ranking hashtags tailored to your niche and brand\n✅ Profile optimization so you can be discovered quickly\n✅ Personalized hashtag strategy to help you grow and increase your followers\n✅ Expert video guide to teach you to find high-ranking hashtags\n✅ Monthly newsletter based on Instagram's newest algorithm updates\n✅ Masters Course 2021/2022 (Platinum or Diamond Gig)",
                price: 60.52,
                owner: {
                    _id: "u205",
                    fullname: "tommysiu",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/429c1a9395f66cd8a36b38028ff35aa6-1550219507580/db25059c-6725-4e49-bf82-fa4d2af0a780.jpg",
                    level: 4,
                    rate: 1
                },
                loc: "Hong Kong",
                memberSince: "Aug 2016",
                avgResponceTime: "3 hours",
                lastDelivery: "about 1 hour",
                about: "Hello! My name is Tommy. I am a multi-displinary marketer with experience in both the Western and Chinese digital marketing landscape. I am passionate about crafting impactful experiences and digital marketing strategies at the intersection of brand and product. I have worked in London, Hong Kong and in Shanghai for companies such as the Adidas, L'Oreal, Pfizer and Danone I currently offer Instagram growth and TikTok marketing strategies on Fiverr",
                category: "marketing",
                tags: ["bio", "instagram marketing", "instagram", "social media", "social network"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i206",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167364631/original/ddbe1967fc0deba979b6d66f2871051245a1544a.jpeg",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/42be567d1b3d46f26680c0e2f4f4a42d-1647785533/2/promote-video-and-channel-to-help-you-make-youtube-monetize.jpg",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/05fa8303b365536c80eb47dd1e4738da-1646740175/Screenshot_20220308-164748_2/o-organic-promotion-and-marketing-for-youtube-monetization.png",
                    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bab73d34f6e7bc8696197f7ecc850eaf-1646740191/Screenshot_20220308-164714_2/o-organic-promotion-and-marketing-for-youtube-monetization.png"
                ],
                title: "I will do organic promotion and marketing for youtube monetization",
                description: "Do you want to Monitize your YouTube Channel?\ni'm the best for digital media marketing, i will help you make youtube monetization\nSafe methods we use:\n· Web 2.0\n· iFrame Embedding\n· PPC advertising campaign\n· Do SEO friendly Video optimization\n· Will share video in Suggested & related videos\n· Add video in Niche related playlists for more impressions\nI strictly follow YT and Fiverr TOS so it means you will get organic You Tube Promotion for your channel monetization.\nREQUIREMENT:\nChannel Link\nWhat do you get from this gig?\n● Watch time boost\n● Compliance with YT TOS\n● Fully Organic And Real Traffic\n● 100% chances of monetization\n● Naturally helps in Video Ranking\nThink that your best friend is Elon Musk, and tomorrow morning you are asking him to post a post asking people to watch your vide0, probably you will get monetized in less than an hour!\nI do the same, just without Elon Musk :)",
                price: 101.04,
                owner: {
                    _id: "u206",
                    fullname: "farah_youtube",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5db4b0cccf5a3e138a9f57542175248c-1620011414308/8d7f7d68-efe9-465e-80d2-aedcc548efdb.JPG",
                    level: 4,
                    rate: 5
                },
                loc: "Vietnam",
                memberSince: "Nov 2019",
                avgResponceTime: "1 hour",
                lastDelivery: "about 4 hours",
                about: "I am trained in online marketing, and I have studied SEO, Ads (Google, Facebook, Bing...), I have 6 years of experience in digital marketing, in which time working at fiverr is 3 years, with more than 2000 completed orders, the main work that I do is: - Youtube seo and promotion - SEO - Website traffics - Spotify promotion - Instagram promotion Contact me if you have any questions!",
                category: "marketing",
                tags: ["youtube", "monetization", "youtube channel", "youtube promotion"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i207",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222820209/original/50b95e0afd209c75fa3693b835fd0db671249736.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/227917705/original/69cf8d3eb5d59f7b2e7554f9fc76aabb461dba54/provide-legal-research-on-any-legal-topic-and-write-case-briefs-for-your-project.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/238875546/original/34b3144a3a29d8a6fa1cb00a458d2310488f0318/handle-case-studies-and-research-related-tasks.jpg"
                ],
                title: "I will perform research on any subject matter for you",
                description: "I have over 5 years of experience conducting high-quality, detailed research throughout my Master of Science by Research degree and PhD programme.\nThe training and projects I have undertaken in my degrees have given me the ability to efficiently source key information. In particular, the niche research required for academic theses has made me proficient at sourcing the most relevant details.\nFurthermore, I have learned how to synthesise a lot of information in a short period of time, incorporate it into further research, and write what I have learned into top-quality publications. This allows me to pinpoint the most important information and produce concise, detailed summaries.\nI will provide a document in whichever format you require (e.g. Word.docx, Adobe.pdf) complete with a detailed summary, references and links should you wish to conduct further research. If you would like me to conduct follow-up research based on what I have provided, please do not hesitate to get in touch for discounted rates.\n<---- PLEASE NOTE: I will not write academic articles, essays or papers. ---->\nPLEASE GET IN TOUCH BEFORE ORDERING TO DISCUSS YOUR REQUIREMENTS.",
                price: 202.07,
                owner: {
                    _id: "u207",
                    fullname: "struhenderson",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
                    level: 4,
                    rate: 5
                },
                loc: "United Kingdom",
                memberSince: "Aug 2021",
                avgResponceTime: "2 hours",
                lastDelivery: "4 days",
                about: "I am a current Doctoral Researcher with a strong research and scientific history, having published academic papers and presented at numerous international conferences. I have a BSc (Hons), a MScR, and have nearly finished my PhD. My experience has given me excellent research and written communication skills, as well as knowledge of how to present and illustrate data digitally. I am highly experienced in the use of the Microsoft Office and Adobe suite of apps. Outside of my career I am very interested in applying my scientific training to aspects of fitness and nutrition.",
                category: "research and summeries",
                tags: ["online research", "research", "internet researcher"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i208",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217276086/original/6a004b8b82868ab02836bdfcb42c4a0e4b042f87.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/220323544/original/84f4588a6edde09cfef7b7a62658399aacf007a0/write-quality-research-and-summaries.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/229465166/original/a031f162ff41568ddc9dc3e74eab3c8af27319ba/provide-quality-essays-research-and-summaries-on-any-topic.png"
                ],
                title: "I will provide quality essays research and summaries on any topic",
                description: "GET CUSTOM ORDERS, QUALITY WORK, AND AN AMAZING EXPERIENCE\nIf you're looking for a professional researcher and a committed writer for all your writing needs, click on this gig because I can't wait to work with YOU.\nI am an expert writer with over 8 years' experience. I guarantee quality, original content written from scratch, plagiarism free, and delivered within the shortest time possible. My main areas of expertise are\nResearch\nEnglish\nHistory\nBusiness\nPsychology\nnursing, arts\nEducation\nCriminal justice\nSociology\nSupply chain\nLogistics\nCase studies\nMarketing\nSummary Writing\nI will offer YOU:\n100% Plagiarism free content\nTimely turnaround\nTop-notch grammar\nWell researched and referenced content\n24/7 Customer support\nKindly contact me before placing an order.\nPS: Custom orders also available upon request",
                price: 67.36,
                owner: {
                    _id: "u208",
                    fullname: "victoriaeva610",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/34a47e49caa09a703d81ef0621ad0ac1-1626197544385/3cb9eb7a-2163-4722-a1b0-0ddb9eb04d4e.png",
                    level: 4,
                    rate: 5
                },
                loc: "Kenya",
                memberSince: "Jul 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "about 16 hours",
                "about": "I am an enthusiastic and proficient writer with 4+ years of research related experience. My journey in the writing industry kicked off at the University where I did countless research and gained more experience. I will assist you with any kind of research and solve your different business needs. Please reach out for excellent and timely work.",
                category: "research and summeries",
                tags: ["reports", "articles", "internet researcher, summaries"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i209",
                image: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210082068/original/f1d222ff641f41a63cce8235a6a5128f05b477bc.jpg",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/244590469/original/8475d93e295dd990731a684c364ebb6c52857634/deliver-quality-case-study-analysis-articles-research-and-summaries.png",
                    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/230560010/original/c8a5fcc782be1e63cf7b24954ebb764375d30c3c/research-and-write-urgent-apa-mla-easy-or-article-on-any-topic.png"
                ],
                title: "I will deliver quality case study analysis, articles, research and summaries",
                description: "Hi, thank you for clicking my gig.\nKindly contact me before placing an order to discuss the requirements and check for availability.\nAre you looking for a professional for your essays, articles, case study, reflections, summary and research work? Then look no further, you are on the right PLACE.\nI am here to provide you with high-quality and professional services. I have been in the writing industry for over six years. As a researcher, I have a keen interest in identifying major problems and proposing better solutions/recommendations against them.\nWhat you will get from this gig?\nUnique and creative content\nOn-time delivery\nEngaging content\nWell researched and quality work\n100% plagiarism-free\nN/B: I OFFER SERVICES ACCORDING TO FIVERR TERMS OF SERVICE (TOS).",
                price: 33.68,
                owner: {
                    _id: "u209",
                    fullname: "angela_637",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/03e667c26a63c20863e016917c423eb0-1622910916319/85930fed-bb45-4b01-b117-3913f19b77d7.PNG",
                    level: 4,
                    rate: 5
                },
                loc: "Kenya",
                memberSince: "Apr 2021",
                avgResponceTime: "1 hour",
                lastDelivery: "about 2 hours",
                about: "I am a professional and diligent writer with more than 6 years experience as a freelance writer. My goal is your satisfaction and to deliver work that you will appreciate. Writing is my passion and I aim to do excellent work for all my clients that will meet the set goals and standards.",
                category: "research and summeries",
                tags: ["research and summary", "case study", "research", "summary", "articles"],
                likedByUsers: ["mini user"]
            },
            {
                _id: "i300",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161720033/original/b710f4f32dea2048e662276a241c9d5dfe638106.jpeg",
                title: "I will write, rebrand, edit and optimize your linkedin profile",
                description: "You've got one chance to make a first impression.\nYour LinkedIn profile is that chance. Are you leaving potential employers with the best impression you can?\nAre you hire-able?\nI'm here to make sure your LinkedIn profile is branded and optimized to it's full potential! I will spend time analyzing, researching and rebranding your profile to help you get noticed.\nI'm back on Fiverr and ready to bring my expertise to help you reach your goals. I was one of the Original Top-Rated Sellers and my ratings speak for themselves. Over 8k gigs completed, and most all of my completed reviews are 5 star!\nI have 3 packages to choose from depending on the level of help you need.\nI hold a Bachelor's Degree in Communication from University of Southern California and have been writing in a professional capacity for over 10 years. I have extensive SEO knowledge and I am a trained copy writer, creative writer and content creation master. Let me help market you for your dream job!",
                price: 134.71,
                owner: {
                    _id: "u300",
                    fullname: "ppiork",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
                    level: 2,
                    rate: 4
                },
                loc: "India",
                memberSince: "Jul 2019",
                avgResponceTime: "2 hours",
                lastDelivery: "2 weeks",
                daysToMake: 3,
                about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
                category: "write linkedin profile",
                tags: ["linkedin", "resume writing", "linkedin banner", "linkedin business"],
                likedByUsers: ['mini-user']
            },
            {
                _id: "i301",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159966352/original/1a65840f4a6b0333d7bd37ea876663dc54b9aeaf.jpg",
                title: "I will write and optimize your linkedin profile in 24 hours",
                description: "✪ LinkedIn Writing and Optimization Services ✪\nDo you want to stand out and take your career or business to the next level?\nI help Entrepreneurs, Change Makers & Big Dreamers stand out and take direction so they can make a great digital first impression!\nMy extensive experience in International Recruitment and Resume Writing has allowed me to gain an in-depth knowledge of industry-specific requirements across a vast range of disciplines. I can make your LinkedIn profile stand out from the crowd!\nChoose one of the packages outlined below or request a custom offer to improve your personal LinkedIn success.\nPackages:\nBasic (Entry-Level Profile): Review and optimization of your LinkedIn Headline and Bio with keywords.\nStandard (Professional Profile): Full LinkedIn profile optimization, including Headline, Bio, and career history rewrite, skill suggestions, and industry-tailored recommendations.\nPremium (Profile Creation): Creation of a full profile from scratch, optimized to meet your career preferences.\nBusiness Profiles ( Message Me To Discuss)\nNow is the time to start moving your career or business to the next level!",
                price: 67.36,
                owner: {
                    _id: "u301",
                    fullname: "muzamilbutt401",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb5d29b35cb0f6bd47e3a2f1fb8a55db-1595779512175/3d984139-fd41-42b2-a94c-fca974593c8a.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "Ghana",
                memberSince: "June 2020",
                avgResponceTime: "4 hours",
                lastDelivery: "3 weeks",
                daysToMake: 3,
                about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
                category: "write linkedin profile",
                tags: ["linkedin", "resume writing", "linkedin banner", "linkedin business"],
                likedByUsers: ['mini-user'],
            },
            {
                _id: "i3002",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200950826/original/08090f735021ad8441f30fe2f38542ce95a2ead9.png",
                title: "I will revamp your linkedin profile or write a professional summary, bio",
                description: "Are you want to make your LinkedIn profile, resume, and cover letter attractive so that the right employers can find you? I am here to assist you.\nI will revamp, create, and optimize your LinkedIn profile with the right choice of keywords. I know the importance of an attractive and professional Linkedin profile and summary that can help you get the job of your dreams.\nWhat you will get?\nEye-catching Headline title that will make you stand out\nKiller bio/summary to grab attention\nEducation, Certifications & Awards\nProfessional Experience\nLinkedIn profile optimization\nHighlight your skills\n100% satisfaction guarantee\nAts resume writing and cover letter\nNote: If you have any questions or special requirements, send me a message. I will be happy to assist you.\nBest Regards!\nHina",
                price: 50.52,
                owner: {
                    _id: "u3002",
                    fullname: "haniwritertech",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb5d29b35cb0f6bd47e3a2f1fb8a55db-1595779512175/3d984139-fd41-42b2-a94c-fca974593c8a.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "Pakistan",
                memberSince: "June 2021",
                avgResponceTime: "2 hours",
                lastDelivery: "2 weeks",
                daysToMake: 3,
                about: "As a CV Writer, Resume Writer, Covering Letter Writer, and LinkedIn Profile Writer, I have written CVs for hundreds of people from all walks of life and within many different market sectors. I help job seekers build their LinkedIn presence and create compelling resumes, so they can get in front of recruiters, impress hiring managers, and land the perfect job for them. I'm excited to help you kickstart your career!",
                category: "write linkedin profile",
                tags: ["linkedin", "resume writing", "linkedin banner", "linkedin business"],
                likedByUsers: ['mini-user']
            },
            {
                _id: "i3003",
                image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161720033/original/b710f4f32dea2048e662276a241c9d5dfe638106.jpeg",
                title: "I will write, rebrand, edit and optimize your linkedin profile",
                descripsion: "You've got one chance to make a first impression.\nYour LinkedIn profile is that chance. Are you leaving potential employers with the best impression you can?\nAre you hire-able?\nI'm here to make sure your LinkedIn profile is branded and optimized to it's full potential! I will spend time analyzing, researching and rebranding your profile to help you get noticed.\nI'm back on Fiverr and ready to bring my expertise to help you reach your goals. I was one of the Original Top-Rated Sellers and my ratings speak for themselves. Over 8k gigs completed, and most all of my completed reviews are 5 star!\nI have 3 packages to choose from depending on the level of help you need.\nI hold a Bachelor's Degree in Communication from University of Southern California and have been writing in a professional capacity for over 10 years. I have extensive SEO knowledge and I am a trained copy writer, creative writer and content creation master. Let me help market you for your dream job!",
                price: 134.71,
                owner: {
                    _id: "u3003",
                    fullname: "mediagirl",
                    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e3f2db9a69a2cc7b69c653d3185b6ba9-1592756841572/fbdf1383-4893-4f94-a3c9-a324c68aca4f.jpg",
                    level: 1,
                    rate: 5
                },
                loc: "United States",
                memberSince: "May 2019",
                avgResponceTime: "2 hours",
                lastDelivery: "about 13 hours",
                daysToMake: 3,
                about: "I'm one of Fiverr's original sellers and I will handle all of your copywriting and SEO blogging needs! You will see my reviews are OUTSTANDING. Fast turn-around and always here to help. :)",
                category: "write linkedin profile",
                tags: ["resume writer", "linked in", "job hunting", "resume writing"],
                likedByUsers: ['mini-user']
            }
        ],
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

// {
//     _id: "101",
//     category: 'Arts & Crafts',
//     image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
//     title: "I will do hyper realistic pencil portrait by hand drawing",
//     description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
//     price: "₪16.84",
//     level: "Level 2 seller",
//     daysToMake: "2 Days Delivery",
//     fullname: "frederick kessie",
//     imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//     loc: "Ghana",
//     memberSince: "Jul 2021",
//     avgResponceTime: "1 hour",
//     lastDelivery: "1 week",
//     rate: "4",
//     about: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
//     reviewers: [
//         {
//             name: "tobiaspille300",
//             country: "Thailand",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
//             review: "frederickkessie ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
//             reviewedAt: "Published 2 months ago",
//             rate: "5"
//         },
//         {
//             name: "liam31",
//             country: "United Kingdom",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//             review: "I requested a slightly earlier delivery on this and once again Frederick came through and provided a fantastic delivery. Thanks so much!",
//             reviewedAt: "Published 3 weeks ago",
//             rate: "5"
//         },
//         {
//             name: "liam31",
//             country: "United Kingdom",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//             review: "Frederick is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
//             reviewedAt: "Published 3 weeks ago",
//             rate: "4"
//         },
//     ],
//     tags: [
//         {
//             name: "pencil drawing"
//         },
//         {
//             name: "realistic drawing"
//         },
//         {
//             name: "hand drawing"
//         },
//         {
//             name: "portrait drawing"
//         },
//         {
//             name: "pencil sketch"
//         }
//     ]
// },
// {
//     _id: "102",
//     image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197422311/original/1907136f4b9684daa164acfa5cfedc6035b771b1.jpg",
//     title: "I will do hyper realistic pencil sketch portrait by hand drawing",
//     description: "Hey ! Thanks for visiting my gig :)\nIn this gig i'm offering you a very 3 unique, preferable and affordable packages.\nIf you are thinking for giving someone special a very beautiful, eye catching gift( hyper realistic hand drawing pencil sketch portrait)?\nPlease select the desirable package and place your order right now and i'll give you a perfect portrait sketch, hand drawing, realistic drawing,pencil drawing in high resolution JPEG/PNG digital file.\nI will provide hand-drawn black & White or colored realistic portraits.\nKindly provide me clear reference photo as much as possible.\nThe material I used for Creating pencil portraits are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, tombomono eraser, brush, blending stump, mechanical pencil, graphite powder etc .\nYou can give me anything:\nPortrait photos\nFamily photos\nAnimal photos\nAny product photos\nLandscape photos\nArchitecture photos\nAnything you imagine\nPlease contact me before placing your order! Thanks.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITAL FILE, IF YOU WANT THE ORIGINAL ONE THEN MESSAGE ME FOR DETAILS.\nFeel free to ask me anything! :)\nThank You...\nvividstore",
//     price: "₪67.37",
//     level: "Level 1 seller",
//     daysToMake: "3 Days Delivery",
//     fullname: "vividstore",
//     imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83cc7c97f9873bdb052590a94d32f84c-1576419363871/ed47443e-0f9b-42ab-beaf-ec0a0acccfe8.jpeg",
//     loc: "Bangladesh",
//     memberSince: "Dec 2019",
//     avgResponceTime: "1 hour",
//     lastDelivery: "about 16 hours",
//     about: "Hello, this is Masuk, stand up for vividstore,I am a young and enthusiastic graphic artist and realistic pencil sketch artist. I am certified as graphic designer from George Washington University, USA. I have almost 11 years experience in this field since my university life. I really love to work with Adobe Illustrator, Adobe Photoshop, and so on as a full time online freelancer. And also passionate about sketching. Thank you.",
//     reviewers: [
//         {
//             name: "Eli ohane",
//             country: "Thailand",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
//             review: "vividstore ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
//             reviewedAt: "Published 1 months ago",
//             rate: "4"
//         },
//     ],
//     tags: [
//         {
//             name: "pencil drawing"
//         },
//         {
//             name: "realistic drawing"
//         },
//         {
//             name: "pencil portrait"
//         },
//         {
//             name: "sketch"
//         },
//         {
//             name: "pencil sketch"
//         }
//     ]
// },
// {
//     _id: "103",
//     image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg",
//     title: "I will draw a hyperrealistic portrait of face or entire body and animals",
//     description: "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
//     price: "₪202.11",
//     level: "Level 2 seller",
//     daysToMake: "14 Days Delivery",
//     fullname: "andreacarvalho_",
//     imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
//     loc: "Brazil",
//     memberSince: "May 2020",
//     avgResponceTime: "1 hour",
//     lastDelivery: "3 days",
//     about: "Hello! I'm a brazilian artist specialized in hyperrealistic drawings and paintings of human figures and animals, i use a diversity of techniques like Oil painting, dry pastel drawing and pencil. I have over 30 years of experience, check out my portfolio.",
//     reviewers: [
//         {
//             name: "rachelrbarnes1",
//             country: "United States",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//             review: "Incredibly grateful for the amazing experience working with you . You are so talented and a kind soul! I highly recommend if you want high quality art to work with her every time",
//             reviewedAt: "Published 1 month ago",
//             rate: "5"
//         },
//         {
//             name: "mark001994",
//             country: "Austria",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
//             review: "The artist was very kind and polite also very fast at the communication. The delivery of the project was on time. And her work is worth the money. I'm really excited about the painting she did. I can truely recommend the Aritst and her work. Big Thanks! :)",
//             reviewedAt: "Published 1 month ago",
//             rate: "4"
//         },
//         {
//             name: "thurstonrobby",
//             country: "United States",
//             flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//             review: "incredible on how precise that art is, picture perfect. 100% amazing job and I will use your services again ...",
//             reviewedAt: "Published 3 weeks ago",
//             rate: "4"
//         },
//     ],
//     tags: [
//         {
//             name: "pencil"
//         },
//         {
//             name: "drawing"
//         },
//         {
//             name: "portrait"
//         },
//         {
//             name: "realistic"
//         },
//         {
//             name: "painting"
//         }
//     ]
// },
// ];