
export default function createBeanieList(root) {
    
    return ({ beanies }) => {
        
        root.innerHTML = '';

        for (const beanie of beanies) {
            
            const li = BeanieCard({ beanie });
            root.append(li);
            
        }
    };
}

export function BeanieCard({ beanie }) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');
    
    
    li.classList.add('beanie-card');

    p.textContent = beanie.title;
    img.src = beanie.image;
    a.href = `./details/?id=${beanie.id}`;

    a.append(p, img);

    li.append(a);

    return li;
}