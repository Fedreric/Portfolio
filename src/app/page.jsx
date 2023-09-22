// import imgDev from '@/assets/luffyg5.png'

import { github, linkedin } from "@/helpers/icons";
import BtnRedSocial from '@/components/Btn-red-social'

export default function Home () {
  return (
    <main>
      <section className='flex justify-around items-center mt-5'>
        <article>
          <h1 className='text-7xl'>Federico Ledesma</h1>
          <h2 className='text-4xl'>Fullstack developer</h2>
          <article className='flex gap-4 mt-3'>
            <BtnRedSocial redSocial={linkedin} link='https://www.linkedin.com/in/federico-luciano-ledesma-0623a6220/' />
            <BtnRedSocial redSocial={github} link='https://github.com/Fedreric' />
          </article>
        </article>
        <picture className='w-[25em]'>
          <img
            src='https://comicvine.gamespot.com/a/uploads/scale_super/11160/111605805/8687496-monkey_d__luffy__gear_5____updated_by_b_a_i_o_r_e_t_t_o_df3gezw-fullview.png'
            alt='Federico Luciano Ledesma'
            className='pe-10'
          />
        </picture>
      </section>
    </main>
  );
}
