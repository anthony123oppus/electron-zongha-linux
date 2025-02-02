import { translate } from "../../../i18n/translate";

const Home = () => {
  return (
    <section className="w-full h-full bg-darkBlue">
      <span className="font-lexend text-4xl font-[600]">
        {translate("common.home")}
        {translate("common.sample", { aham: "alufan" })}
        <br />
      </span>
      <span className="font-inter italic text-8xl text-mightnightBlue">HELLO LOVE GOOD BYE</span>
    </section>
  );
};

export default Home;
