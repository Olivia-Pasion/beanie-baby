// import services and utilities
import { getBeanies } from './services/beanie-services.js';

// import component creators
import createPaging from './components/Paging.js';
import createFilter from './components/Filter.js';
import createBeanieList from './components/BeanieList.js';

// declare state variables
let title = '';
let astroSign = '';
let page = 1;
const pageSize = 10;
let totalPages = 0;

let beanies = [];

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    astroSign = params.get('astroSign') || '';
    page = Number(params.get('page')) || 1;
    //pageSize = Number(params.get('pageSize')) || 10;

    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;
    const { data, count } = await getBeanies(title, astroSign, { start, end });
    beanies = data;

    totalPages = Math.ceil(count / pageSize);

    display();
}


//filter handler

function handleFilter(filter) {
    const params = new URLSearchParams(window.location.search);

    params.set('title', filter.title);
    params.set('astroSign', filter.astroSign);
    params.set('page', 1);
    window.location.search = params.toString();
    display();
}

//paging handler
function handlePaging(change) {
    const params = new URLSearchParams(window.location.search);

    page = Math.max(1, page + change);
    params.set('page', page);
    window.location.search = params.toString();
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const Paging = createPaging(document.querySelector('#paging'), { handlePaging }); 
const Filter = createFilter(document.querySelector('#filter'), { handleFilter });
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));


// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Paging({ page, totalPages });
    Filter({ title, astroSign });
    BeanieList({ beanies });
}


// Call display on page load
handlePageLoad();
// display();
