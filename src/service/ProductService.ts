import axios from 'axios';
import {Product} from "@/models/Product";

export default class ProductService {

    public static getAllProducts(): Promise<Product[]> {
        return axios.get('/products', {baseURL: 'http://localhost:8080/'})
            .then( response => {
                return response.data?._embedded?.products
            } )
    }
}