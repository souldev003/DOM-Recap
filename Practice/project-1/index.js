let currentTab = "all";
const tabActive = ["btn-active"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  for (let t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
    }
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];

  for (const selected of pages) {
    selected.classList.add("hidden");
  }

  if (tab === "all") {
    allContainer.classList.remove("hidden");
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
  } else {
    rejectedContainer.classList.remove("hidden");
  }
}

switchTab(currentTab);
