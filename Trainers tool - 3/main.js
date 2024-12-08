document.addEventListener('DOMContentLoaded', () => {
  const pptBoxes = document.querySelectorAll('.ppt-box');
  const closeButtons = document.querySelectorAll('.close-btn');

  pptBoxes.forEach(box => {
      box.addEventListener('click', () => {
          box.classList.toggle('enlarged');
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.stopPropagation();
          const pptBox = button.closest('.ppt-box');
          pptBox.classList.remove('enlarged');
      });
  });

  displayNotes();
});

function popup() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "popupContainer";
  popupContainer.innerHTML = `
      <h1>New Note</h1>
      <textarea id="note-text" placeholder="Enter your note..."></textarea>
      <div id="btn-container">
          <button id="submitBtn" onclick="createNote()">Create Note</button>
          <button id="closeBtn" onclick="closePopup()">Close</button>
      </div>
  `;
  document.body.appendChild(popupContainer);
}

function closePopup() {
  const popupContainer = document.getElementById("popupContainer");
  if (popupContainer) {
      popupContainer.remove();
  }
}

const texts = ["I'm a Developer", "And DevOps Engineer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000; // Delay between current and next text
let textIndex = 0;
let charIndex = 0;

const typingTextElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < texts[textIndex].length) {
    typingTextElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (texts.length) setTimeout(type, newTextDelay);
});


//new code

document.addEventListener('DOMContentLoaded', () => {
  const calendarLink = document.getElementById('calendar-link');
  const docsLink = document.getElementById('notes-link');
  const installationLink = document.getElementById('installation-link');
  const bookmarksLink = document.getElementById('bookmarks-link');
  const tokensLink = document.getElementById('token-link');

  // Handle Calendar link
  calendarLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent the default anchor link action
      window.open(calendarLink.href, '_blank');  // Open link in a new tab
  });

  // Handle Notes link
  docsLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent the default anchor link action
      window.open(docsLink.href, '_blank');  // Open link in a new tab
  });

  // Handle Installation link
  installationLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent the default anchor link action
      window.open(installationLink.href, '_blank');  // Open link in a new tab
  });

    // Handle Bookmark link
    bookmarksLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor link action
    window.open(bookmarksLink.href, '_blank');  // Open link in a new tab
  });

   // Handle Token link
    tokensLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor link action
    window.open(tokensLink.href, '_blank');  // Open link in a new tab
  });
});

