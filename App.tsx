import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, buttonText }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 text-center">
      <h3 className="mt-0 text-lg font-semibold text-[#2d6a4f]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#2d6a4f] text-white no-underline rounded-md mt-4 font-bold transition-colors duration-200 hover:bg-[#1a472a]">
        {buttonText}
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-0">
      <header className="text-center py-10 px-5 bg-gradient-to-br from-[#1a472a] to-[#2d6a4f] text-white rounded-2xl mb-8 shadow-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Ecossistema Financeiro Integrado</h1>
        <p className="text-lg sm:text-xl font-light">Sua jornada do mindset à gestão prática</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold border-b-2 border-[#2d6a4f] pb-3 text-[#1a472a] mb-6">
          1. Diagnóstico e Mentalidade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Perfil Financeiro"
            description="Descubra seu comportamento com o dinheiro."
            link="https://perfilfinanceiro.lovable.app/"
            buttonText="Fazer Teste"
          />
          <Card
            title="Duplo Quântico"
            description="Técnica para cocriação da sua nova realidade."
            link="https://tecnica-duplo-quantico-h3yhdzf.gamma.site/"
            buttonText="Acessar"
          />
          <Card
            title="Ritual do Sal"
            description="Limpeza e foco para atrair prosperidade."
            link="https://ritual-do-sal-dn965gh.gamma.site/"
            buttonText="Ver Ritual"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold border-b-2 border-[#2d6a4f] pb-3 text-[#1a472a] mb-6">
          2. Sabedoria e Fundamentos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Finanças à Luz da Bíblia"
            description="Princípios milenares de prosperidade."
            link="https://financas-a-luz-da-biblia-1b2whdf.gamma.site/"
            buttonText="Estudar"
          />
          <Card
            title="Cabala Financeira"
            description="A energia do dinheiro sob a visão cabalística."
            link="https://cabalafinanceira.netlify.app/"
            buttonText="Explorar"
          />
          <Card
            title="Simbologia Financeira"
            description="O poder dos arquétipos na riqueza."
            link="https://simbologia-financeira-fcmqalc.gamma.site/"
            buttonText="Conhecer"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold border-b-2 border-[#2d6a4f] pb-3 text-[#1a472a] mb-6">
          3. Prática e Acompanhamento
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Desafio 7D Financeiro"
            description="7 dias para organizar sua vida financeira."
            link="https://desafio7dfinanceiro.netlify.app/"
            buttonText="Começar"
          />
          <Card
            title="Método SPEC"
            description="Estratégia prática de organização."
            link="https://metodo-spec-c9ucwvq.gamma.site/"
            buttonText="Ver Método"
          />
          <Card
            title="Mentor Alinhamento"
            description="Seu assistente para manter o foco."
            link="https://mentoralinhamento.lovable.app/"
            buttonText="Falar com Mentor"
          />
          <Card
            title="Foco na Solução"
            description="App para direcionar sua energia para o que importa."
            link="https://foco-na-solucao-app.lovable.app/"
            buttonText="Abrir App"
          />
        </div>
      </section>
    </div>
  );
};

export default App;