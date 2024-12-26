import React from 'react'

const visi = () => {
  return (
      <div class="container mx-auto pt-6 py-4 ">
          <div class="grid grid-cols-2 gap-2 bg-center flex px-8">
            <div>
              <div class="bg-slate-400 h-40 rounded-2x1 text-zinc-800 ">
                  <h3 className='text-center'>VISI</h3>
                  <p className='p-8'>Krativitas,  jujur, informatif</p>
              </div>
            </div>
            <div>
              <div class="bg-slate-400 h-40 rounded-2x1 text-zinc-800 ">
                 <article className='text-wrap '>
                    <h3 className='text-center'>MISI</h3>
                    <p className='px-20'>A. memajukan kreatifitas mahasiswa</p>
                    <p className='px-20'>B. Menerapkan kreatifitas mahasiswa</p>
                 </article>
              </div>
            </div>
          </div>
          
      </div>

  );
}

export default visi