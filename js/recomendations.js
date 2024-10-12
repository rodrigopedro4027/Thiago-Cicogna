            // Array de comentários (JSON)
            const comments = [
                {
                    name: {
                        pt: "Leandro de Oliveira Santos",
                        en: "Leandro de Oliveira Santos"
                    },
                    position: {
                        pt: "Especialista em Manutenção e Engenharia de Aeronáutica",
                        en: "Aviation Maintenance and Engineering Specialist"
                    },
                    text: {
                        pt: "Tive o prazer de trabalhar diretamente com o Thiago por alguns anos e, depois disso, mantive contato próximo e acompanhei seus outros projetos e atividades. Ele tem um grande conhecimento sobre diferentes campos da aviação, bem como uma personalidade muito humilde, permitindo-lhe estar em um modo de constante melhoria, o que o torna um ativo inestimável para qualquer empresa ou projeto. Para aqueles que tiveram qualquer contato com ele, não é preciso dizer que, além de tudo isso, ele é uma ótima pessoa e muito agradável de se conviver.",
                        en: "I had the pleasure of working directly with Thiago for a few years and, after that, maintained close contact and followed his other projects and activities. He has great knowledge of different fields of aviation, as well as a very humble personality, allowing him to be in a constant improvement mode, making him an invaluable asset for any company or project. For those who had any contact with him, it goes without saying that besides all that, he is a great human being and a very pleasant person to be around."
                    }
                },
                {
                    name: {
                        pt: "Murillo Pelosi",
                        en: "Murillo Pelosi"
                    },
                    position: {
                        pt: "Diretor de Suporte ao Cliente - América Latina e Caribe",
                        en: "Customer Support Director - Latin America & Caribbean"
                    },
                    text: {
                        pt: "Durante a ação de campo, Thiago lidou com situações de grande pressão e obteve bons resultados em todas elas. Ajudou a empresa a projetar ferramentas para apoiar as atividades de engenharia. Ele demonstrou boas habilidades além daquelas necessárias para a função técnica, como planejamento, organização e comprometimento com os objetivos.",
                        en: "During the field action, Thiago dealt with situations under great pressure and achieved good results in all of them. He helped the company design tools to support engineering activities. He demonstrated good skills beyond those needed for the technical function, such as planning, organization, and commitment to goals."
                    }
                },
                {
                    name: {
                        pt: "Luiz Simoes",
                        en: "Luiz Simoes"
                    },
                    position: {
                        pt: "Aviação | Engenharia | Estruturas de Aeronaves | Manutenção | Qualidade | Gestão | Instrução | Liderança",
                        en: "Aviation | Engineering | Aircraft Structures | Maintenance | Quality | Management | Instruction | Leadership"
                    },
                    text: {
                        pt: "O Dr. Thiago Cicogna é super inteligente, gente boa, responsável, atencioso, humilde, educado e ótimo profissional. Trabalhar com ele é sempre muito prazeroso. Ele tem prazer em nos passar o que sabe, além de ser muito bem humorado.",
                        en: "Dr. Thiago Cicogna is super intelligent, kind, responsible, attentive, humble, polite, and an excellent professional. Working with him is always very pleasant. He enjoys sharing his knowledge with us and has a great sense of humor."
                    }
                },
                {
                    name: {
                        pt: "Marcos D.",
                        en: "Marcos D."
                    },
                    position: {
                        pt: "Análise de Dados | Engenharia de Confiabilidade | Análise de Falhas | Segurança | Manutenção | Aviação",
                        en: "Data Analysis | Reliability Engineering | Failure Analysis | Safety | Maintenance | Aviation"
                    },
                    text: {
                        pt: "O Thiago é um ótimo professor, conhece muito bem o que faz. E, além de tudo, sabe passar bem a matéria. É organizado e simples na maneira de ensinar.",
                        en: "Thiago is a great teacher, knows his stuff very well, and, above all, knows how to convey the material effectively. He is organized and straightforward in his teaching approach."
                    }
                }
                // Adicione mais comentários aqui se necessário
            ];

            // Função para renderizar comentários
            function renderComments(lang) {
                const grid = document.getElementById('recommendationsGrid');
                grid.innerHTML = ''; // Limpa o grid antes de renderizar
                comments.forEach(comment => {
                    const col = document.createElement('div');
                    col.className = 'col';
                    col.innerHTML = `
                    <div class="recommendations__item">
                        <div class="d-flex justify-content-between align-items-top w-100">
                            <div class="col-auto">
                                <img src="./assets/svg/user.svg" alt="Foto" class="recommendations__photo">
                            </div>
                            <div class="col-auto">
                                <img src="./assets/png/quotation.png" width="30px" alt="">
                            </div>
                        </div>
                        <div class="recommendations__name">${comment.name[lang]}</div>
                        <div class="recommendations__position">${comment.position[lang]}</div>
                        <p class="recommendations__text">${comment.text[lang]}</p>
                    </div>
                `;
                    grid.appendChild(col);
                });
            }
