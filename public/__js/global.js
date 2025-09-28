window.onscroll = function () {
  const btn = document.getElementById("backtop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("backtop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuToggle = document.getElementById("menu-toggle");
const scrollMenu = document.querySelector(".scrollmenu");

menuToggle.addEventListener("click", () => {
  scrollMenu.classList.toggle("show");
});
menuToggle.addEventListener("blur", () => {
  scrollMenu.classList.remove("show");
});

function previewImage(imageUrl) {
  if (imageUrl) {
    document.getElementById("preview-image").setAttribute("src", imageUrl);
    document.getElementById("preview-container").style.visibility = "visible";
    document.getElementById("preview-container").style.opacity = 1;
  }
}

function hidePreview() {
  document.getElementById("preview-container").style.visibility = "hidden";
  document.getElementById("preview-container").style.opacity = 0;
}

function previewImage2(imageUrl) {
  if (imageUrl) {
    document.getElementById("preview-image2").setAttribute("src", imageUrl);
    document.getElementById("preview-container2").style.visibility = "visible";
    document.getElementById("preview-container2").style.opacity = 1;
  }
}

function hidePreview2() {
  document.getElementById("preview-container2").style.visibility = "hidden";
  document.getElementById("preview-container2").style.opacity = 0;
}

// Combined click handler to hide both previews when clicking outside
function clickDocument(event) {
  const target = event.target;
  const isNotSlideImage = 
    !target?.classList?.contains("slide-image") &&
    !target?.classList?.contains("slide-image2");

  // Hide preview 1 if clicking outside
  if (target.getAttribute("id") !== "preview-image" && isNotSlideImage) {
    hidePreview();
  }

  // Hide preview 2 if clicking outside
  if (target.getAttribute("id") !== "preview-image2" && isNotSlideImage) {
    hidePreview2();
  }
}

// Attach click event to document
document.addEventListener("click", clickDocument);
