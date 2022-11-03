import dotenv from 'dotenv/config'
import {v2} from 'cloudinary'

export const database = process.env.DATABASE
export const username = process.env.USERNAME
export const password = process.env.PASSWORD
export const host = process.env.host
export const dialect = process.env.dialect


export const cloudinary = v2

cloudinary.config({
    cloud_name: 'jorge-tarifa',
    api_key: 984487691413983,
    api_secret: 'jCsjzSl3-dYjd3UZ0ZpWZ01x7Hw'
});

