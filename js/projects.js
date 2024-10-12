// Exemplo de dados em JSON
const projectsData = [
    {
        "iframe": "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:share:7143597081033711616\" height=\"608\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Publicação incorporada\"></iframe>"
    },
    {
        "iframe": "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237858988304814080\" height=\"848\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Publicação incorporada\"></iframe>"
    },
];

document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
});

function renderProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.error('O container de projetos não foi encontrado.');
        return;
    }

    projectsData.forEach(project => {
        const cardHTML = `
        <div class="col-md-5 mb-4">
            <div class="card border-1 position-relative" style="border-radius: 8px;">
                <div class="card-body">
                    ${project.iframe}
                </div>
            </div>
        </div>
`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}
