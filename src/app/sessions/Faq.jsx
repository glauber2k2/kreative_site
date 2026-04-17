import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "../components/Accordion";
import { CircleHelp } from "lucide-react";

export default function Faq() {
  return (
    <div
      id="faq"
      className="md:min-h-screen w-full bg-[#060c11] flex py-10 md:py-20 justify-center  text-white via-55%"
      style={{
        background:
          "radial-gradient(ellipse 80% 90% at center, #312e8140 0%, #060c11 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col w-full items-center">
        <h1 className="text-center text-2xl font-bold flex gap-2 items-center">
          <CircleHelp size={28} />
          Perguntas frequentes
        </h1>

        <AccordionRoot className="mt-8 w-full sm:max-w-4xl space-y-4">
          <AccordionItem value="criacao">
            <AccordionTrigger>
              Como funciona o processo de criação dos vídeos?
            </AccordionTrigger>
            <AccordionContent>
              <ol className="space-y-4 p-2">
                <li>
                  <div>
                    <strong>1. Alinhamento e Briefing:</strong>
                    <p className="text-gray-400">
                      Entendemos o seu negócio, os seus objetivos e quem é o
                      seu público-alvo para criar a melhor estratégia.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>2. Criação do Roteiro:</strong>
                    <p className="text-gray-400">
                      Desenvolvemos roteiros persuasivos focados em retenção
                      e alta conversão para o seu nicho.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>3. Produção e Captação:</strong>
                    <p className="text-gray-400">
                      Nossa equipe entra em ação para produzir o material,
                      garantindo um visual profissional e atrativo.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>4. Edição Dinâmica:</strong>
                    <p className="text-gray-400">
                      Adicionamos efeitos, transições e trilha sonora
                      estratégica para prender a atenção do seu cliente do
                      início ao fim.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>5. Entrega Final:</strong>
                    <p className="text-gray-400">
                      Você recebe os vídeos nos formatos ideais, prontos
                      para subir nas suas campanhas de anúncios e escalar
                      suas vendas.
                    </p>
                  </div>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pagamento">
            <AccordionTrigger>Quais as formas de pagamento?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-6">
                <li>PIX (20% de Desconto.)</li>
                <li>Cartão de crédito em até 12x sem juros.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="servicos">
            <AccordionTrigger>
              Vocês fazem apenas os vídeos ou também gerenciam os anúncios?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Nós somos uma agência completa! Além de produzir criativos
                de alta conversão, também oferecemos o serviço de gestão de
                tráfego pago. Podemos criar as campanhas, testar os vídeos e
                otimizar os resultados para garantir o melhor Retorno Sobre
                o Investimento (ROI) para a sua empresa.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tempo">
            <AccordionTrigger>
              Quanto tempo leva para os vídeos ficarem prontos?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O prazo de entrega costuma variar de 3 a 7 dias úteis,
                dependendo da complexidade da produção (animação, gravação
                local, edição avançada). Trabalhamos com agilidade para que
                você consiga iniciar suas campanhas o mais rápido possível,
                sem abrir mão das técnicas de alta conversão.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="plataformas">
            <AccordionTrigger>
              Os vídeos são otimizados para quais plataformas?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Entregamos os materiais já nos formatos e durações ideais
                para as principais plataformas de anúncios do mercado: Meta
                Ads (Instagram e Facebook), TikTok Ads e YouTube Ads. Aplicamos
                as melhores práticas específicas de cada rede para maximizar
                a retenção e a taxa de cliques (CTR).
              </p>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </div>
  );
}
