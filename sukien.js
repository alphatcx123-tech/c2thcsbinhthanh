
    function showPage(id) {
      document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
      });

      document.getElementById(id).classList.add("active");

      document.querySelectorAll(".navbar button").forEach(function(btn) {
        btn.classList.remove("active-nav");
      });
      const currentBtn = document.getElementById("btn-" + id);
      if (currentBtn) {
        currentBtn.classList.add("active-nav");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    function showYear(pageId, year) {
      const pageContainer = document.getElementById(pageId);
      
      pageContainer.querySelectorAll(".year-content").forEach(function(content) {
        content.classList.remove("active-year");
      });

      const selectedYearContent = document.getElementById(pageId + "-" + year);
      if (selectedYearContent) {
        selectedYearContent.classList.add("active-year");
      }

      pageContainer.querySelectorAll(".sub-navbar button").forEach(function(btn) {
        btn.classList.remove("active-sub");
      });

      const clickedBtn = pageContainer.querySelector(".btn-" + pageId + "-" + year);
      if (clickedBtn) {
        clickedBtn.classList.add("active-sub");
      }
    }

document.querySelectorAll("[data-external-event]").forEach(function(element) {
  const eventId = element.getAttribute("data-external-event");
  switch (eventId) {
    case "evt_1":
      element.addEventListener("click", function(event) {
        showPage('home')
      });
      break;
    case "evt_2":
      element.addEventListener("click", function(event) {
        showPage('students')
      });
      break;
    case "evt_3":
      element.addEventListener("click", function(event) {
        showPage('teachers')
      });
      break;
    case "evt_4":
      element.addEventListener("click", function(event) {
        showPage('schedule')
      });
      break;
    case "evt_5":
      element.addEventListener("click", function(event) {
        showPage('grades')
      });
      break;
    case "evt_6":
      element.addEventListener("click", function(event) {
        showPage('contact')
      });
      break;
    case "evt_7":
      element.addEventListener("click", function(event) {
        showYear('students', '2026')
      });
      break;
    case "evt_8":
      element.addEventListener("click", function(event) {
        showYear('students', '2027')
      });
      break;
    case "evt_9":
      element.addEventListener("click", function(event) {
        showYear('students', '2028')
      });
      break;
    case "evt_10":
      element.addEventListener("click", function(event) {
        showYear('teachers', '2026')
      });
      break;
    case "evt_11":
      element.addEventListener("click", function(event) {
        showYear('teachers', '2027')
      });
      break;
    case "evt_12":
      element.addEventListener("click", function(event) {
        showYear('teachers', '2028')
      });
      break;
    case "evt_13":
      element.addEventListener("click", function(event) {
        showYear('schedule', '2026')
      });
      break;
    case "evt_14":
      element.addEventListener("click", function(event) {
        showYear('schedule', '2027')
      });
      break;
    case "evt_15":
      element.addEventListener("click", function(event) {
        showYear('schedule', '2028')
      });
      break;
    case "evt_16":
      element.addEventListener("click", function(event) {
        showYear('grades', '2026')
      });
      break;
    case "evt_17":
      element.addEventListener("click", function(event) {
        showYear('grades', '2027')
      });
      break;
    case "evt_18":
      element.addEventListener("click", function(event) {
        showYear('grades', '2028')
      });
      break;
    case "evt_19":
      element.addEventListener("click", function(event) {
        showYear('contact', '2026')
      });
      break;
    case "evt_20":
      element.addEventListener("click", function(event) {
        showYear('contact', '2027')
      });
      break;
    case "evt_21":
      element.addEventListener("click", function(event) {
        showYear('contact', '2028')
      });
      break;
  }
});
