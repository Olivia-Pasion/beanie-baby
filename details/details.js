
import { getBeanie } from '../services/beanie-services.js';

//component creators
import createBeanieDetail from '../components/BeanieDetail.js';
//state variables
let beanie = {};

//handler

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');
    if (!id) {window.location = '/';}

    beanie = await getBeanie(id);
    if (!beanie) window.location = '/';

    display();

}

//component
const BeanieDetail = createBeanieDetail(document.querySelector('#beanie-detail'));

//display function
function display() {
    BeanieDetail({ beanie });
}

//page load
handlePageLoad();