import axios from 'axios';
import { BACKEND_DOMAIN } from './config';
import { getAuthUser } from '../Core/Helper/storage';

export async function addItemToBasket(itemId, cb) {
    const auth = getAuthUser()
    if (BACKEND_DOMAIN) {
        try {
            const { data } = await axios.post(`${BACKEND_DOMAIN}/api/items/${itemId}/add-to-basket`, {}, { headers: { authorization: auth.token } })
            if (data.success) return true
            else return false

        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export async function removeItemFromBasket(itemId, cb) {
    const auth = getAuthUser()
    if (BACKEND_DOMAIN) {
        try {
            const { data } = await axios.post(`${BACKEND_DOMAIN}/api/items/${itemId}/remove-from-basket`, {}, { headers: { authorization: auth.token } })
            if (data.success) return true
            else return false

        } catch (error) {
            console.log(error)
            return false
        }
    }
}
