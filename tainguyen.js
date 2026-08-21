
          function filterGrade(className, currentButton) {
            const buttons = document.querySelectorAll('.btn-grade');
            buttons.forEach(btn => {
              btn.style.background = 'white';
              btn.style.color = '#1565C0';
            });
            currentButton.style.background = '#1565C0';
            currentButton.style.color = 'white';

            const items = document.querySelectorAll('.resource-item');
            items.forEach(item => {
              item.style.display = (className === 'all' || item.classList.contains(className)) ? 'block' : 'none';
            });
          }

document.querySelectorAll("[data-external-event]").forEach(function(element) {
  const eventId = element.getAttribute("data-external-event");
  switch (eventId) {
    case "evt_1":
      element.addEventListener("click", function(event) {
        filterGrade('all', this)
      });
      break;
    case "evt_2":
      element.addEventListener("click", function(event) {
        filterGrade('lop6', this)
      });
      break;
    case "evt_3":
      element.addEventListener("click", function(event) {
        filterGrade('lop7', this)
      });
      break;
    case "evt_4":
      element.addEventListener("click", function(event) {
        filterGrade('lop8', this)
      });
      break;
    case "evt_5":
      element.addEventListener("click", function(event) {
        filterGrade('lop9', this)
      });
      break;
  }
});
