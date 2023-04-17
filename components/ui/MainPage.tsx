import Image from "deco-sites/std/components/Image.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
export interface Props {
  title: string;
}

function MainPage({ title }: Props) {
  return (
    <div class="main-page-bg min-h-screen w-full min-w-full">
      {/* Section Title */}
      <h1 class="md:hidden font-extrabold text-2xl italic text-center py-6">
        Aceito em todos os <p>universos e metaversos.</p>
      </h1>
      {/* Image/text Section */}
      <div class="flex flex-row pt-5">
        <div class="w-1/2 md:hidden">
          <Image
            class=" mx-auto"
            src={"https://goblockchain.io/wp-content/uploads/2023/04/myway_mao-403x1024.png.webp"}
            alt={"myway mão"}
            width={204}
            height={519}
          />
        </div>
        <div class="hidden w-1/2 md:block mt-10">
          <Image
            class=" mx-auto "
            src={"https://goblockchain.io/wp-content/uploads/2023/04/myway_mao-403x1024.png.webp"}
            alt={"myway mão"}
            width={403}
            height={1024}
          />
        </div>
        <div class="lg:w-1/4 w-1/2 py-8 pr-3 md:pr-0 flex flex-col items-start md:justify-start">
          <h1 class="hidden md:block font-extrabold text-4xl italic text-left py-6">
            Aceito em todos os <p>universos e metaversos.</p>
          </h1>
          <h1 class="font-bold text-left text-lg mb-10 md:text-white md:text-xl">
            Moedas, comunidades, NFTs, benefícios, descontos e recompensas, tudo
            funcionando do seu jeito em um cartão de débito normal.
          </h1>
          <button class="md:hidden bg-red-200 px-5 py-2 italic font-extrabold hover:scale-110 transition duration-300">
            Pedir meu cartão
          </button>
          <button class="hidden md:block bg-red-200 px-5 py-3 italic font-extrabold hover:scale-110 transition duration-300">
            Quero um cartão MyWay
          </button>
          <p class="text-sm font-medium mt-5 md:text-white md:text-lg">
            Entre para a lista de espera.
          </p>
          <div class="md:hidden pt-14">
            <Image
              class=""
              src={"https://goblockchain.io/wp-content/uploads/2023/02/MyWay_logo_V.png.webp"}
              alt={"myway mão"}
              width={113}
              height={58}
            />
          </div>
          <div class="hidden md:block pt-28">
            <Image
              class=""
              src={"https://goblockchain.io/wp-content/uploads/2023/02/MyWay_logo_V.png.webp"}
              alt={"myway mão"}
              width={285}
              height={147}
            />
          </div>
        </div>
      </div>
      {/* White Banner Section */}
      <div class="bg-white w-full min-w-full h-52 md:h-40 md:flex flex-row justify-center items-center">
        <h1 class="italic text-parceiros font-extrabold text-lg lg:text-3xl text-center py-4">
          Parceiros
        </h1>
        <div class="w-full flex flex-row justify-around md:w-1/2 lg:w-1/3">
          <Image
            class=""
            src={"https://goblockchain.io/wp-content/uploads/2022/12/logo-foxbit.png.webp"}
            alt={"myway mão"}
            width={184}
            height={60}
          />
          <Image
            class=""
            src={"https://goblockchain.io/wp-content/uploads/2022/12/TresPontoZero-White.png.webp"}
            alt={"myway mão"}
            width={140}
            height={84}
          />
        </div>
      </div>
      {/* Main Page Footer Section */}
      <div class="main-page-bg h-36 flex flex-col items-center justify-center gap-2">
        <p class="italic font-bold">
          Você pode seguir a gente em todos esses canais.
        </p>
        <ul class="flex items-center justify-center gap-4">
          <li>
            <a
              href="https://www.instagram.com/deco.cx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Instagram"
                strokeWidth={1}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class=""
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
