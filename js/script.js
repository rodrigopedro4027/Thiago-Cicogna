const toggleSidebar = document.getElementById('toggleSidebar');
            const sidebar = document.getElementById('sidebar');
            const content = document.getElementById('content');

            toggleSidebar.addEventListener('click', () => {
                sidebar.classList.toggle('show');
                content.classList.toggle('shift');
                toggleSidebar.querySelector('i').classList.toggle('fa-chevron-right');
                toggleSidebar.querySelector('i').classList.toggle('fa-chevron-left');
            });

            document.addEventListener('click', (event) => {
                // Verifica se o clique foi fora da barra lateral e do botão
                if (!sidebar.contains(event.target) && !toggleSidebar.contains(event.target)) {
                    // Fecha a barra lateral se estiver visível
                    if (sidebar.classList.contains('show')) {
                        sidebar.classList.remove('show');
                        content.classList.remove('shift');
                        toggleSidebar.querySelector('i').classList.add('fa-chevron-right');
                        toggleSidebar.querySelector('i').classList.remove('fa-chevron-left');
                    }
                }
            });


            function setActiveYear(year) {
                const allTabs = document.querySelectorAll('.content-tab');
                const selectedTab = document.getElementById(`content-${year}`);
                allTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                if (selectedTab) {
                    selectedTab.classList.add('active');
                }
            }

            function setActive(element, contentId) {
                const allItems = document.querySelectorAll('.timeline-item');
                const allTabs = document.querySelectorAll('.content-tab');

                allItems.forEach(item => {
                    item.classList.remove('active');
                });
                element.classList.add('active');

                allTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                document.getElementById(contentId).classList.add('active');
            }

            const videos = [
                {
                    "videoUrl": "https://www.youtube.com/watch?v=Ig3CtQTrF1M",
                    "title": {
                        "pt": "Fatores Humanos Manutenção Aeronáutica - Parte 2",
                        "en": "Human Factors in Aeronautical Maintenance - Part 2"
                    }
                },
                {
                    "videoUrl": "https://www.youtube.com/watch?v=Ig3CtQTrF1M",
                    "title": {
                        "pt": "Fatores Humanos Manutenção Aeronáutica",
                        "en": "Human Factors in Aeronautical Maintenance"
                    }
                },
                {
                    "videoUrl": "https://www.youtube.com/watch?v=gegf6o2yaqk",
                    "title": {
                        "pt": "Gestão do Conhecimento na Manutenção Aeronáutica",
                        "en": "Knowledge Management in Aeronautical Maintenance"
                    }
                },
                {
                    "videoUrl": "https://www.youtube.com/watch?v=ymXTHyj2UII",
                    "title": {
                        "pt": "Introdução aos Procedimentos de Limpeza de Aeronaves",
                        "en": "Introduction to Aircraft Cleaning Procedures"
                    }
                }
            ];

            // Função para extrair o ID do vídeo e gerar a URL da thumbnail
            function generateThumbnailUrl(videoUrl) {
                const videoIdMatch = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
                const videoId = videoIdMatch ? videoIdMatch[1] : null; // Extrai o ID do vídeo
                return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''; // Retorna a URL da thumbnail
            }

            // Adiciona a URL da thumbnail ao objeto de vídeo
            videos.forEach(video => {
                video.imageUrl = generateThumbnailUrl(video.videoUrl);
            });

            // Função que carrega e exibe os vídeos
            function loadVideos() {
                const container = document.getElementById('videos-container');

                videos.forEach(video => {
                    const videoCard = document.createElement('div');
                    videoCard.className = 'custom-video-card';

                    videoCard.innerHTML = `
                            <a href="${video.videoUrl}" target="_blank" class="text-decoration-none">
                                <img src="${video.imageUrl}" alt="${video.title.pt}" class="video-thumbnail">
                                <p class="text-start">
                                    <i class="bi bi-play-fill"></i>
                                    <span data-lang-pt="${video.title.pt}" data-lang-en="${video.title.en}">${video.title.pt}</span>
                                </p>
                            </a>
                        `;
                    container.appendChild(videoCard);
                });
            }

            // Chama a função para carregar os vídeos
            document.addEventListener('DOMContentLoaded', loadVideos);

            function setActive(element, contentId) {
                // Remover a classe 'active' de todos os itens da timeline
                const items = document.querySelectorAll('.timeline-item');
                items.forEach(item => item.classList.remove('active'));

                // Adicionar a classe 'active' ao item clicado
                element.classList.add('active');

                // Esconder todas as abas de conteúdo
                const contents = document.querySelectorAll('.content-tab');
                contents.forEach(content => content.classList.remove('active'));

                // Mostrar o conteúdo correspondente ao item clicado
                const activeContent = document.getElementById(contentId);
                activeContent.classList.add('active');
            }


            // Seleciona todos os elementos com a classe 'scroll-container'
            const scrollContainers = document.querySelectorAll('.scroll-container');

            scrollContainers.forEach(scrollContainer => {
                let isDown = false;
                let startX;
                let scrollLeft;
                let startY;

                scrollContainer.addEventListener('mousedown', (e) => {
                    isDown = true;
                    scrollContainer.classList.add('active');
                    scrollContainer.classList.add('no-select');
                    startX = e.pageX - scrollContainer.offsetLeft;
                    scrollLeft = scrollContainer.scrollLeft;
                    startY = e.pageY;
                });

                scrollContainer.addEventListener('mousemove', (e) => {
                    if (!isDown) return;

                    const x = e.pageX - scrollContainer.offsetLeft;
                    const y = e.pageY - startY;
                    const walk = (x - startX) * 2;

                    // Verifique o movimento vertical
                    if (Math.abs(y) < 10) { // Limite para movimento vertical
                        scrollContainer.scrollLeft = scrollLeft - walk;
                    }
                });

                scrollContainer.addEventListener('mouseup', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                    scrollContainer.classList.remove('no-select');
                });

                scrollContainer.addEventListener('mouseleave', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                    scrollContainer.classList.remove('no-select');
                });

                scrollContainer.addEventListener('wheel', (e) => {
                    // Evita o comportamento padrão de rolagem vertical
                    e.preventDefault();

                    // Adiciona rolagem horizontal com base no movimento da roda do mouse
                    scrollContainer.scrollLeft += e.deltaY;
                });
            });


            // Função para mudar o idioma
            function changeLanguage(lang) {
                // Atualiza elementos que contêm texto
                const textElements = document.querySelectorAll('[data-lang-pt], [data-lang-en]');
                textElements.forEach(element => {
                    element.textContent = element.getAttribute(`data-lang-${lang}`);
                });

                // Atualiza elementos que contêm HTML
                const htmlElements = document.querySelectorAll('[data-lang-html-pt], [data-lang-html-html]');
                htmlElements.forEach(element => {
                    element.innerHTML = element.getAttribute(`data-lang-html-${lang}`);
                });

                // Renderiza comentários no idioma selecionado
                renderComments(lang);
            }

            // Atualizando o dropdown e os textos ao mudar idioma
            document.getElementById('lang-pt').addEventListener('click', function () {
                changeLanguage('pt');
                document.getElementById('languageDropdown').innerHTML = '<i class="fas fa-chevron-left fa-xs"></i> PT';
            });

            document.getElementById('lang-en').addEventListener('click', function () {
                changeLanguage('en');
                document.getElementById('languageDropdown').innerHTML = '<i class="fas fa-chevron-left fa-xs"></i> EN';
            });

            // Gira o ícone ao abrir/fechar o dropdown
            document.getElementById('languageDropdown').addEventListener('click', function () {
                const icon = this.querySelector('i');
                icon.classList.toggle('rotate-icon');
            });

            // Renderiza comentários iniciais ao carregar a página
            window.onload = function () {
                renderComments('pt'); // Renderiza em português por padrão
            };