document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const carGrid = document.getElementById('carGrid');
    const carCards = document.querySelectorAll('.car-card');

    // Função para filtrar carros
    function filterCars() {
        const searchText = searchInput.value.toLowerCase();
        const filterType = filterSelect.value;

        carCards.forEach(card => {
            const model = card.querySelector('h3').textContent.toLowerCase();
            const type = card.getAttribute('data-type');

            const matchesSearch = model.includes(searchText);
            const matchesFilter = filterType === 'all' || type === filterType;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners
    searchInput.addEventListener('input', filterCars);
    filterSelect.addEventListener('change', filterCars);
});
