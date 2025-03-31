import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col
                      lg:flex-row justify-center items-center h-auto lg:h-screen lg:gap-30 gap-10 p-5"
      >
        <Image
          className="rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
          src="/ismael.png"
          alt="Foto Ismael"
          width={450}
          height={450}
        />
        <div className="flex flex-col justify-center w-full lg:w-1/3 text-justify">
          <span className="text-2xl sm:text-3xl py-5 lg:py-10  font-bold">
            Ismael Costa
          </span>
          <p className="text-sm sm:text-base px-2 sm:px-0">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
            busca de soluções eficientes e criativas. Com experiência em
            diversas linguagens e frameworks, gosto de transformar ideias em
            produtos funcionais. Tenho habilidade para trabalhar em equipe e
            enfrentar desafios com agilidade. Estou constantemente aprendendo e
            aprimorando minhas habilidades para acompanhar as tendências do
            mercado. Meu foco está no desenvolvimento de aplicações
            performáticas e intuitivas. Gosto de otimizar códigos e melhorar a
            experiência do usuário. Sempre pronto para novos desafios e
            oportunidades!
          </p>
        </div>
      </div>
    </>
  );
}
