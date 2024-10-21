export function Loading () {
  return (
    <>
      <section className='flex w-80 gap-2 pt-2'>

        <div
          class='w-8 h-8 border-4 border-transparent text-orange-700 text-4xl animate-spin flex items-center justify-center border-t-orange-600 rounded-full'
        />

        <span className='text-2xl w-80 inline-block'>Cargando imagen...</span>
      </section>

    </>
  )
}
