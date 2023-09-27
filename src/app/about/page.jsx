import Button from "@mui/material/Button";
export default function AboutPage () {
  return (
    <main>
      <section className='flex'>
        <article>
          <p className='w-[80ch]'>
            Me adentré en el mundo del desarrollo web en el año
            2021, cuando tuve mis primeros encuentros
            durante mi primer año como estudiante de Programador Universitario.
            A partir de entonces, empecé a estudiar de manera autodidacta en
            2022 y gracias a un sistema de becas, en 2023 pude completar dos
            cursos de desarrollo web: uno en Fullstack MERN de la mano de
            <a href='https://rollingcodeschool.com/' target='_blank' className='text-violet-500'> RollingCode</a>, y otro a través de una capacitación proporcionada por
            <a href='https://www.globallearning.com.ar/' target='_blank' className='text-violet-500'> Global Learning</a>. En este último, adquirí conocimientos sobre buenas
            prácticas y actualizaciones en los contenidos relacionados con
            JavaScript, React y Next.js.
          </p>
          <p className='w-[80ch] mt-2'>
            Mi formación previa incluye un título como Técnico en Informática
            Personal y Profesional, donde trabajé con C++, C# y bases de datos
            relacionales como MySQL. En 2019, participé en las Olimpiadas de Programación
            Argentinas, esta experiencia me brindó la oportunidad de colaborar en un equipo con personas provenientes de diferentes provincias, lo que contribuyó significativamente a mi desarrollo en trabajo en equipo mejorando mis habilidades en trabajo en equipo.
          </p>
          <p className='w-[80ch] mt-2'>
            Finalicé mis estudios secundarios con una experiencia en prácticas
            profesionalizantes, donde trabajamos en el desarrollo de un sistema
            de gestión académica. Este sistema nos permitía administrar el
            estado de los alumnos y toda su información de manera eficiente.
          </p>
          <p className='w-[80ch] mt-2'>
            En este momento, estoy en busca de una oportunidad de inserción en
            el mundo IT, donde
            pueda seguir desarrollándome y mejorando como profesional en el
            desarrollo de software.
          </p>
        </article>
        <article>
          <picture>
            <img
              src='https://comicvine.gamespot.com/a/uploads/scale_super/11160/111605805/8687496-monkey_d__luffy__gear_5____updated_by_b_a_i_o_r_e_t_t_o_df3gezw-fullview.png'
              alt='Federico Luciano Ledesma'
            />
          </picture>
          <Button
            variant='outlined'
            className='w-full rounded-sm py-2 border-violet-600 text-white hover:border-violet-600'
            href='/pdf/CV-Ledesma.pdf'
            download='CV-Ledesma'
          >
            Descargar CV
          </Button>
        </article>
      </section>
    </main>
  );
}
