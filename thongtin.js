
          function filterNews(category, currentButton) {
            const buttons = document.querySelectorAll('.btn-filter');
            buttons.forEach(btn => btn.classList.remove('active'));
            currentButton.classList.add('active');

            const items = document.querySelectorAll('.news-item');
            items.forEach(item => {
              item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
            });
          }

document.querySelectorAll("[data-external-event]").forEach(function(element) {
  const eventId = element.getAttribute("data-external-event");
  switch (eventId) {
    case "evt_1":
      element.addEventListener("click", function(event) {
        filterNews('all', this)
      });
      break;
    case "evt_2":
      element.addEventListener("click", function(event) {
        filterNews('thongbao', this)
      });
      break;
    case "evt_3":
      element.addEventListener("click", function(event) {
        filterNews('luuyi', this)
      });
      break;
  }
});
