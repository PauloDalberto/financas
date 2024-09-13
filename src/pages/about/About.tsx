import './about.css'

export default function About(){
  return(
    <main className="about-container">
      <section className='about-infos about-container'>
        <img src="/foto-perfil.jpg" alt="Foto do criador do site" className='foto-perfil'/>

        <div className='presentation'>
          <h1>Bem-vindo!</h1>
          <p>Me chamo Paulo Henrique Dalberto, sou estudante de Engenharia de software na FAG - Cascavel, possuo experiência na área desde abril de 2023, sempre atuando com metodologia Scrum juntamente com minha equipe.</p>
        </div>
      </section>

      <section className='section'>
        <h1>tese</h1>

        {/* Arrumar o fundo para ter o max-width correto e ver na pagina heaedr pq o border ta pegando 100%  e nao ta respeirando o paddigng */}
      </section>
      
    </main>
  )
}