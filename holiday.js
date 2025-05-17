<script>
  document.addEventListener('DOMContentLoaded', function () {
    consttoggleButton = document.getElementById('toggleButton');
    const hiddenCards = document.querySelectorAll('.destination-card.hidden');
    let isExpanded = false;

    toggleButton.addEventListener('click', function () {
      hiddenCards.forEach(card => {
        card.style.display = isExpanded ? 'none' : 'block';
      });
      toggleButton.textContent = isExpanded ? 'View More' : 'View Less';
      isExpanded = !isExpanded;
    });
  });
</script>
