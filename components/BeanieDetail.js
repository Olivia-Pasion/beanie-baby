

export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const theme = root.querySelector('.theme');
    const styleNumber = root.querySelector('.style-number');
    const astroSign = root.querySelector('.astro-sign');
    const color = root.querySelector('.color');
    const title = root.querySelector('.title');
    const swingTag = root.querySelector('.swing-tag');
    const tushTag = root.querySelector('.tush-tag');
    const birthday = root.querySelector('.birthday');
    const releaseDate = root.querySelector('.release-date');
    const releaseYear = root.querySelector('.release-year');
    const retirement = root.querySelector('.retirement');
    const animal = root.querySelector('.animal');
    const subTheme = root.querySelector('.sub-theme');
   

    return ({ beanie }) => {
        img.src = beanie.image;
        img.alt = beanie.name;
        theme.textContent = beanie.theme;
        styleNumber.textContent = beanie.styleNumber;
        astroSign.textContent = beanie.astroSign;
        color.textContent = beanie.color;
        title.textContent = beanie.title;
        title.href = `./details/?id=${beanie.id}`;
        swingTag.textContent = beanie.swingTagGeneration;
        tushTag.textContent = beanie.tushTagGeneration;
        birthday.textContent = beanie.birthday;
        releaseDate.textContent = beanie.releaseDate;
        releaseYear.textContent = beanie.releaseYear;
        retirement.textContent = beanie.retirementDate;
        animal.textContent = beanie.animal;
        subTheme.textContent = beanie.subtheme;

    };
}