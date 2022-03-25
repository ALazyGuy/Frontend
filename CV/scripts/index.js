const show = (element) => {
    element.style.display = "none";

    const image = document.getElementsByTagName("img")[0];
    
    const id = setInterval(() => {
        image.width += 2;
        image.height += 2;

        if(image.width == 300){
            clearInterval(id);
        }
    }, 10);
}