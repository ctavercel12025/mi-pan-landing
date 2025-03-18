import * as axios from 'axios';


export class FilesService {
    URL_SERVER: string = 'https://mi-pan-lambda.vercel.app/api/';

    async getCatalog() {
        const response = await axios.default.get(this.URL_SERVER + 'catalog');
        return response.data;
    }
}