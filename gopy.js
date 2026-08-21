
    function toggleLetter(headerElement) {
      const item = headerElement.parentElement;
      const isActive = item.classList.contains('active');
      

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    }

    function searchLetters() {
      const input = document.getElementById('searchInput');
      const filter = input.value.toLowerCase();
      const items = document.querySelectorAll('.letter-item');

      items.forEach(item => {
        const titleText = item.querySelector('.letter-title').textContent.toLowerCase();
        const bodyText = item.querySelector('.letter-body').textContent.toLowerCase();
        
        if (titleText.includes(filter) || bodyText.includes(filter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    }

document.querySelectorAll("[data-external-event]").forEach(function(element) {
  const eventId = element.getAttribute("data-external-event");
  switch (eventId) {
    case "evt_1":
      element.addEventListener("keyup", function(event) {
        searchLetters()
      });
      break;
    case "evt_2":
      element.addEventListener("click", function(event) {
        toggleLetter(this)
      });
      break;
  }
});
