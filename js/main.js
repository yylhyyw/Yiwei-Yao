window.onload = () => {
    var grid = document.querySelector('.grid');
    var iso = new Isotope(grid, {
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 80
        }
    });
};