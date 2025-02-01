import { translate } from "../../../i18n/translate"

const Home = () => {
  return (
    <section className='w-full h-full' >
        {translate('common.home')}{translate("common.sample", {aham : "alufan"})}
    </section>
  )
}

export default Home