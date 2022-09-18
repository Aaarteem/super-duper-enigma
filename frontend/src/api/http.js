import axios from 'axios'
import config from 'config'
import {stringify} from 'query-string'


const createHeaders = () => {
    const user = JSON.parse(localStorage.getItem('IqNeoSimulator_auth.user'));
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    }
    if (user) {
        headers.Authorization = 'Bearer ' + user.token
    }
    return headers
}

const instance = axios.create({
    baseURL: config.apiUrl,
    timeout: 30000,
})

export function get(url, emuId, data, options = {}) {
    return instance.get(url + (emuId ? '?emu_id=' + emuId : '') + (data ? '&' + stringify(data) : ''),
        {headers: createHeaders(), ...options})
}

export function post(url, emuId, data, options = {}) {
    return instance.post(url + (emuId ? '?emu_id=' + emuId : ''), data, {headers: createHeaders(), ...options})
}

export function put(url, emuId, data, options = {}) {
    return instance.put(url + (emuId ? '?emu_id=' + emuId : ''), data, {headers: createHeaders(), ...options})
}

export function del(url, emuId, data, options = {}) {
    return instance.delete(url + (emuId ? '?emu_id=' + emuId : '') + (data ? '&' + stringify(data) : ''),
        {headers: createHeaders(), ...options})
}

export default instance
