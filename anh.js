

document.querySelectorAll("[data-external-event]").forEach(function(element) {
  const eventId = element.getAttribute("data-external-event");
  switch (eventId) {
    case "evt_1":
      element.addEventListener("click", function(event) {
        document.getElementById('gallery').style.display = document.getElementById('gallery').style.display === 'grid' ? 'none' : 'grid';
      });
      break;
  }
});
