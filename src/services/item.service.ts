import axios from "axios";

class ItemService {
    getItemList() {
        return axios.get(`${process.env.REACT_APP_REST_URL}/items`)
                    .then(({data}) => data)
                    .catch((error) => console.log("ITEM LIST GET FAILED", error))
    }
}

export default new ItemService();