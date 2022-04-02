import { httpService } from './http.service'
import axios from 'axios';

// import { utilService } from './util-service.js';
// import { storageService } from './async-storage-service.js';

const LOGGEDIN_USER_KEY = 'loggedinUser'
const USERS_KEY = 'user'

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
    query,
    getById,
};
// _createUsers()

async function query() {
    return await httpService.get(USERS_KEY)
}
async function getById(id) {
    console.log(id);
    return await httpService.get(`${USERS_KEY}/${id}`)

}
async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(LOGGEDIN_USER_KEY)
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem(LOGGEDIN_USER_KEY, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(LOGGEDIN_USER_KEY) || 'null')
}

export const uploadImg = async (file) => {
    //gets the file and upload it to cloudinary
    // Defining our variables
    const UPLOAD_PRESET = 'ssrtedsh'; // Insert yours
    const CLOUD_NAME = 'dkqvblbeq'; // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', file);
    FORM_DATA.append('upload_preset', UPLOAD_PRESET);
    // Sending a post method request to Cloudniarys' API
    try {
      const res = await axios.post(UPLOAD_URL, FORM_DATA);
      return res.data;
    } catch (err) {
      console.error('ERROR!', err);
    }
  };
  


