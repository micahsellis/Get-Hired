import tokenService from '../utils/tokenService';


const BASE_URL = '/api/followups';

export function getAll(jobID) {
    return fetch(`${BASE_URL}/${jobID}`)
        .then(res => res.json());
}

export function create(jobID, followup) {
    return fetch(`${BASE_URL}/${jobID}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(followup)
    }).then(res => res.json());
}

export function update(followup) {
    return fetch(`${BASE_URL}/${followup._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(followup)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}