

export default function createPaging(root, { handlePaging }) {

    const pageInfo = root.querySelector('.page-info');
    const [prev, next] = root.querySelectorAll('button');

    prev.addEventListener('click', () => {
        handlePaging(-1);
    });

    next.addEventListener('click', () => {
        handlePaging(+1);
    });

    
    return ({ page, totalPages }) => {
        prev.disabled = page === 1;
        next.disabled = page === totalPages;

        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    };
}