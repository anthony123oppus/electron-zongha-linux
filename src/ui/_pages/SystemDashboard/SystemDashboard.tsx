import DefaultLayout from '../../_sections/Layout/DefaultLayout'

const SystemDashboard = () => {
  return (
    <DefaultLayout>
        <section className='w-full min-h-screen bg-softBlue/80 p-10 pt-20 flex gap-2 flex-wrap'>
            <div className='h-20 w-1/4'>
                <h1 className='text-2xl font-inter font-bold italic'>System Dashboard</h1>
            </div>
        </section>
    </DefaultLayout>
  )
}

export default SystemDashboard