const projects = [
  {
    title: "POS Laravel App",
    desc: "A web-based point of sale system built using Laravel.",
    features: [
      "Role-based authentication (Admin & Staff)",
      "Cart & transaction system",
      "Stock management",
      "Category & product CRUD",
    ],
  },
];

function openProject(index) {
  document.getElementById("modalTitle").innerText = projects[index].title;
  document.getElementById("modalDesc").innerText = projects[index].desc;

  const featureList = document.getElementById("modalFeature");
  featureList.innerHTML = "";
  projects[index].features.forEach(f => {
    const li = document.createElement("li");
    li.innerText = f;
    featureList.appendChild(li);
  });

  document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}