const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
        // windowInputs = document.querySelectorAll(choose);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        });
    });
    // windowInputs.forEach(item => {
    //     item.addEventListener('choose', (i) => {
    //         if ( == ) {
                
    //         }
    //     });
    // });

};

export default checkNumInputs;