import './about.css'

export default function About(){
  return(
    <main >
      <section className='about-container'>
        <img src="/foto-perfil.jpg" alt="Foto do criador do site" className='foto-perfil'/>

        <div className='presentation'>
          <h1>Bem-vindo!</h1>
          <p>Me chamo Paulo Henrique Dalberto, sou estudante de Engenharia de software na FAG - Cascavel, possuo experiência na área desde abril de 2023, sempre atuando com metodologia Scrum juntamente com minha equipe.</p>
        </div>
      </section>

      <section className='about-infos'>
        <div className='about-content'>

        </div >
      </section>
      
    </main>
  )
}