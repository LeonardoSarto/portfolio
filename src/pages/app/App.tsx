import React from 'react';
import './App.css';
import Card from "../../components/card/Card";

function App() {
  let achiviementList = [
    {
      body: "Evento de competição de ideias e soluções onde prestigiei e alcancei o segundo lugar com a equipe Scorpion.",
      heading: "Hackathon Copel 2022", image: "hackathon-copel.jpeg",
      target: {
        text: "Acessar Post",
        link: "https://www.linkedin.com/posts/leosarto_tecnologia-empreendedorismo-hackathoncopel-activity-7002796640122073088-nzTz"
      }
    },
    {
      body: "Evento de competição de ideias e soluções onde prestigiei e alcancei o segundo lugar com a equipe Scorpion.",
      heading: "DevPR Conf", image: "dev-pr.jpeg",
      target: {
        text: "Acessar Post",
        link: "https://www.linkedin.com/posts/leosarto_tecnologia-empreendedorismo-hackathoncopel-activity-7002796640122073088-nzTz"
      }
    },
    {
      body: "Evento de competição de ideias e soluções onde prestigiei e alcancei o segundo lugar com a equipe Scorpion.",
      heading: "CPBR14", image: "campus-party.jpeg",
      target: {
        text: "Acessar Post",
        link: "https://www.linkedin.com/posts/leosarto_tecnologia-empreendedorismo-hackathoncopel-activity-7002796640122073088-nzTz"
      }
    },
  ];

  let certificationList = [
    {
      body: "Certificação após colaborar no projeto Open Source da DIO.",
      heading: "Contribuindo em um Projeto Open Source no Github", image: "certificate-open-source-github.jpg"
    },
    {
      body: "Evento de competição de ideias e soluções onde prestigiei e alcancei o segundo lugar com a equipe Scorpion.",
      heading: "DevPR Conf", image: "dev-pr.jpeg",
      target: {
        text: "Acessar Post",
        link: "https://www.linkedin.com/posts/leosarto_tecnologia-empreendedorismo-hackathoncopel-activity-7002796640122073088-nzTz"
      }
    },
    {
      body: "Evento de competição de ideias e soluções onde prestigiei e alcancei o segundo lugar com a equipe Scorpion.",
      heading: "CPBR14", image: "campus-party.jpeg",
      target: {
        text: "Acessar Post",
        link: "https://www.linkedin.com/posts/leosarto_tecnologia-empreendedorismo-hackathoncopel-activity-7002796640122073088-nzTz"
      }
    },
  ];

  return (
      <div className="container">
        <Card cardHeading="Leonardo Sarto" cardSubheading="Engenheiro de Software" cardImage="selfie-leonardo.jpeg"
              primaryButton={{text: "Entrar em Contato", onClick: () => console.log("Entrar em Contato")}}
              secondaryButton={{text: "Ver Stacks", onClick: () => console.log("Entrar em Contato")}}
              cardBody="Desenvolvedor Fullstack com hard skills focadas em desenvolvimento mobile, buscando soluções inteligentes para seus problemas."/>
        <section id="achievements">
          <h2>
            Consquistas
          </h2>
          <div className="divFlex">
            {achiviementList.map((card) => (
                <Card cardImage={card.image} cardHeading={card.heading} cardBody={card.body} target={card.target}/>
            ))}
          </div>
        </section>
        <section id="certificates">
          <h2>
            Certificados
          </h2>
          <div className="divFlex">
            {certificationList.map((card) => (
                <Card cardImage={card.image} cardHeading={card.heading} cardBody={card.body} target={card.target}/>
            ))}
          </div>
        </section>
      </div>
  );
}

export default App;
