import React from "react";
import {
  Carousel,
  CarouselContainer,
  CarouselDots,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
} from "../components/SliderParallax";

export default function Feedbacks() {
  const options = { loop: true };
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const feedbacks = [
    {
      id: 1,
      name: "Gabrielly Guedes",
      role: "Publicitária",
      message: "Finalmente estou apreciando com calma cada clique seu! Nem me aguentei já fui olhando as possibilidades de como postar kkkkkk ... Fique até inspirada a fazer citação sobre cada fase da minha vida, porque eu ameiiiii tudo 🥹 Tinha que ser VOCÊ! me senti tão segura e livre (você sabe que sou péssima quando se trata de fotos minhas kkk)",
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Diretora de Marketing, CreativeCorp",
      message: "Que fotos são essas? Eu to completamente sem palavras! Você conseguiu registrar um dos momentos mais importantes da minha vida de um jeito tão real e emocionante. Cada foto carrega um sentimento, uma memoria... eu me vi de novo naquele dia. Obrigada por todo cuidado sensibilidade e por me deixar tão à vontade em um momento tão intenso. Seu trabalho é lindo demais!",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Hadassa Costa",
      role: "Empresária",
      message: "Eu acabei de ver as fotos aqui e tô sem reação... De verdade, você conseguiu registrar tudo de um jeito tão lindo e tão real. Tem foto que eu olho e me arrepio, sério. Você pegou cada detalhe, cada emoção...coisa que eu nem lembrava direito na hora. Obrigada por ter tido tanto cuidado comigo naquele momento. Bocê me deixou tranquila e isso fez toda diferença...Eu tô completamente apaixonada pelo resultado, de verdade.",
      avatar: "https://i.pravatar.cc/150?img=27"
    },
    {
      id: 4,
      name: "Ana Paula",
      role: "Gerente de Projetos, Agência Luz",
      message: "Muito obrigada por todo amor, cuidado e dedicação no que faz. Amei muito seu trabalho. Que o senhor possa abençoar mais e mais a sua vida 🥰🫶",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 5,
      name: "Ana Luiza",
      role: "Gerente de Projetos, Agência Luz",
      message: "Eu ainda tô sem palavras para descrever o quanto eu amei seu trabalho! Desde o primeiro contato você foi super tenciosa, me deixou tranquila e explicou tudo com muita paciência. No dia, eu já me senti segura, mas quando recebi o material...foi outra coisa. Você conseguiu registrar exatamente o que eu sentia naquele momento. Não são so fotos, é memória, é sentimento. Obrigada por tanto cuidado e sensibilidade. 😭💓",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 6,
      name: "Tereza Alves",
      role: "Gerente de Projetos, Agência Luz",
      message: "Minha social media, depois dessas mudanças percebemos uma melhora significativa nos números. O alcance e o engajamento cresceram e os posts estão performando muito melhor do que antes...Dá pra ver que existe uma estratégia por trás de tudo, não são postaens aleatórias, e isso faz toda diferença nos resultados",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    {
      id: 6,
      name: "Mateus Silva",
      message: "As ideias de conteúdo estão muito boas e têm ajudado bastante a direcionar nossa comunicação. Antes a gente tinha dificuldade em saber o que postar, e agora tudo faz sentido, existe uma linha de raciocínio e um proposito por trás de cada publicação. Isso valorizou muito a iumagem da nossa marca.",
      role: "CEO, TechNova",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      id: 7,
      name: "Mateus Silva",
      message: "A gente queria elogiar a organização do cronograma, porque isso realmente mudou nossa rotina aqui. Antes as postagens ficavam meio desorganizadas e a gente não tinha tanta visão do que ia ao ar, e agora está tudo muito mais claro e alinhado. Cosneguimos nos planejar melhor internamento e isso trouxe uma sensação muito mais profissional para a comunicação da marca!",
      role: "Gerente de Projetos, Agência Luz",
      avatar: "https://i.pravatar.cc/150?img=33"
    }
  ];

  return (
    <div
      id="portfolio"
      className="w-full lg:min-h-screen bg-black text-white py-10 md:py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col h-full justify-center w-full">
        <div className="text-4xl lg:text-5xl font-medium mb-16 text-center lg:text-left">
          O que <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 font-bold">nossos clientes</span> dizem
        </div>

        <Carousel options={options} autoplayOptions={autoplayOptions}>
          <CarouselContainer>
            {feedbacks.map((feedback) => (
              <CarouselSlide key={feedback.id}>
                <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-8 py-4 px-2">
                  {/* Message Bubble */}
                  <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/20 p-8 lg:p-12 rounded-[2.5rem] rounded-bl-xl border border-indigo-500/30 shadow-[0_0_40px_rgba(79,70,229,0.15)] backdrop-blur-md relative transition-transform duration-300 hover:-translate-y-2 group h-72">
                    {/* Aspas decorativas */}
                    <div className="absolute top-8 right-8 text-indigo-400/10 group-hover:text-indigo-400/20 transition-colors duration-300">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                      </svg>
                    </div>

                    <p className="text-sm lg:text-xl text-gray-200 leading-relaxed relative z-10 font-medium">
                      "{feedback.message}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-5 ml-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-400 shrink-0">
                        <img src={feedback.avatar} alt={feedback.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{feedback.name}</h3>
                      <p className="text-indigo-300 font-medium text-sm lg:text-base">{feedback.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselSlide>
            ))}
          </CarouselContainer>

          <div className="mt-12 grid grid-cols-[auto_1fr] items-center gap-5 lg:w-3/4 mx-auto px-2">
            <div className="flex items-center gap-2">
              <CarouselPrev />
              <CarouselNext />
            </div>
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
