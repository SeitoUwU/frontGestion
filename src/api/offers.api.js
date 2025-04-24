import { http } from "./http";

export const offerApi = {
    list: (params) => http.get('/offers', { params }),
    get: (id) => http.get(`/offers/${id}`),
    create: (payload) => http.post('/offers', payload),
}