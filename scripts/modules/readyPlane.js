const readyPlane = (forms, main) => {
    forms forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    })
};

export default readyPlane;