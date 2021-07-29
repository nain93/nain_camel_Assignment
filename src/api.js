import axios from "axios";

const BASE_URL = "data/dummy.json";

const getProductInfo = () => axios.get(BASE_URL);

export default getProductInfo;
