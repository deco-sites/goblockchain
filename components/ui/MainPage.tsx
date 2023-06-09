import Image from "deco-sites/std/components/Image.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
import WhiteBannerSec from "deco-sites/fashion/components/ui/WhiteBannerSec.tsx";

export interface Props {
  firstLineTitle?: string;
  secLineTitle?: string;
  bigImageUrl: string;
  bigImageAlt?: string;
  descText: string;
  buttonTxtMobile: string;
  buttonTxtDesktop: string;
  subTxt: string;
  subImageUrl: string;
  subImageDesc: string;
}

function MainPage(
  {
    firstLineTitle,
    secLineTitle,
    bigImageUrl,
    bigImageAlt,
    descText,
    buttonTxtDesktop,
    buttonTxtMobile,
    subImageUrl,
    subTxt,
    subImageDesc,
  }: Props,
) {
  return (
    <div class="main-page-bg min-h-screen w-full min-w-full">
      {/* Section Title */}
      <h1 class="md:hidden font-extrabold text-2xl italic text-center py-6">
        {firstLineTitle} <p>{secLineTitle}</p>
      </h1>
      {/* Image/text Section */}
      <div class="flex flex-row pt-5">
        <div class="w-1/2 md:hidden">
          <Image
            class=" mx-auto"
            src={bigImageUrl}
            alt={bigImageAlt}
            width={204}
            height={519}
          />
        </div>
        <div class="hidden w-1/2 md:block mt-10">
          <Image
            class=" mx-auto "
            src={bigImageUrl}
            alt={bigImageAlt}
            width={403}
            height={1024}
          />
        </div>
        <div class="lg:w-1/4 w-1/2 py-8 pr-3 md:pr-0 flex flex-col items-start md:justify-start">
          <h1 class="hidden md:block font-extrabold text-4xl italic text-left py-6">
            {firstLineTitle} <p>{secLineTitle}</p>
          </h1>
          <h1 class="font-bold text-left text-lg mb-10 md:text-white md:text-xl">
            {descText}
          </h1>
          <button class="md:hidden bg-red-200 px-5 py-2 italic font-extrabold hover:scale-110 transition duration-300">
            {buttonTxtMobile}
          </button>
          <button class="hidden md:block bg-red-200 px-5 py-3 italic font-extrabold hover:scale-110 transition duration-300">
            {buttonTxtDesktop}
          </button>
          <p class="text-sm font-medium mt-5 md:text-white md:text-lg">
            {subTxt}
          </p>
          <div class="md:hidden pt-14">
            <Image
              class=""
              src={subImageUrl}
              alt={subImageDesc}
              width={113}
              height={58}
            />
          </div>
          <div class="hidden md:block pt-28">
            <Image
              class=""
              src={subImageUrl}
              alt={subImageDesc}
              width={285}
              height={147}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
