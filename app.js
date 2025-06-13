const images = [
    { src: "https://picsum.photos/id/1015/600/400", caption: "Árboles" },
    { src: "https://picsum.photos/id/1016/600/400", caption: "Globos" },
    { src: "https://picsum.photos/id/1018/600/400", caption: "Comida" },
    { src: "https://picsum.photos/id/1020/600/400", caption: "Chica" },
    { src: "https://picsum.photos/id/1024/600/400", caption: "Señal" },
    { src: "https://picsum.photos/id/1025/600/400", caption: "Loro" },
    { src: "https://picsum.photos/id/1027/600/400", caption: "Ciudad" },
    { src: "https://picsum.photos/id/1032/600/400", caption: "Hojas" },
    { src: "https://picsum.photos/id/1035/600/400", caption: "Café" }
];

const container = document.getElementById("imageContainer");

function renderGridView() {
    container.innerHTML = `
          <div class="row">
            ${images.map(img => `
              <div class="col-md-6 mb-3 col-lg-4">
                <img src="${img.src}" style="width:100%" alt="${img.caption}" />
              </div>
            `).join('')}
          </div>
        `;
}

function renderListView() {
    container.innerHTML = images.map(img => `
          <div class="card mb-3">
            <div class="card-header d-flex justify-content-between">
              <span>${img.caption}</span>
              <span>${new Date().toLocaleDateString()}</span>
            </div>
            <img src="${img.src}" class="card-img-top" alt="${img.caption}" />
            <div class="card-body">
              <p class="card-text"><strong>${Math.floor(Math.random() * 1000)} Likes</strong></p>
              <p class="card-text">This is a sample post showing ${img.caption}.</p>
            </div>
          </div>
        `).join('');
}

document.getElementById("gridViewBtn").addEventListener("click", renderGridView);
document.getElementById("listViewBtn").addEventListener("click", renderListView);
renderGridView();


