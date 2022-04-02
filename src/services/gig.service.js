// import axios from 'axios';
import { httpService } from './http.service';

// axios.defaults.withCredentials = true

// import { utilService } from './util-service.js';
// import { storageService } from './async-storage-service.js';

const ENDPOINT = 'gig'
const categories = [{
    name: 'Arts and Crafts',
    type: 'arts-crafts',
    txt: 'Outsource your arts and crafts.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/William_Morris_design_for_Trellis_wallpaper_1862.jpg'

},
{
    name: 'Data Entry',
    type: 'data-entry',
    txt: 'Learn your Business',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png'
},
{
    name: 'Logo design',
    type: 'logo-design',
    txt: 'Build your brand',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'
},
{
    name: 'Marketing',
    type: 'marketing',
    txt: 'Build your brand. Grow your business.',
    img: 'https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/10-Ways-to-Create-an-Email-Marketing-List-opengraph.png'
},
{
    name: 'Research and Summeries',
    type: 'research-summeries',
    txt: 'Explore more',
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/192053463/original/d52627959e5a21f2f9a104c22c8005a2e898ec0a/write-effective-and-inspiring-articles.png'
},
{
    name: 'Write & Translation',
    type: 'write-translation',
    txt: 'Go global',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png'
},
{
    name: 'Video explainers',
    type: 'video-explainers',
    txt: 'Engage your audience',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'
}
]

export const gigService = {
    query,
    save,
    getById,
    getCategories,
    remove
}

async function query(filterBy) {
    return await httpService.get(ENDPOINT, filterBy)
}

async function save(gig) {
    return gig._id
        ? await httpService.put(`${ENDPOINT}/${gig._id}`, gig)
        : await httpService.post(ENDPOINT, gig)
}

async function getById(id) {
    return await httpService.get(`${ENDPOINT}/${id}`)
}

async function remove(id) {
    return await httpService.delete(`${ENDPOINT}/${id}`)
    // return axios.delete(BASE_URL + id).then((res) => res.data)
    // return storageService.remove(KEY, id)
}

function getCategories() {
    return categories
}

