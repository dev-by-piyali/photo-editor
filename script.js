function setFilter(f, btn) {
    document.getElementById('photo').style.filter = f;

    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function resetFilter() {
    document.getElementById('photo').style.filter = 'brightness(1)';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
}