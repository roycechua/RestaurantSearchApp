import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Qwj8MaVm5sV1eXUystFZwJZH37Gk_sxuNdFa5NA-Wjo6QzRxLRrX7ntAXCr6At8s484DsXxc2kNJxNMESVjh8XOzR9Cv5a-vGxd6irgHZOtVhDOOgIkgVZR9s20IX3Yx',
    },
});
