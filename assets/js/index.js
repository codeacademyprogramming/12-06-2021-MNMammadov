const basketButton = document.getElementById('basket-btn');
const basket = document.getElementById('basket');
basketButton.addEventListener('click', function () {
    basket.classList.toggle('visible');
});
