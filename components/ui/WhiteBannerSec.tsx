import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  description?: string;
  firstPartnerUrl: string;
  firstPartnetAlt?: string;
  secPartnerUrl: string;
  secPartnetAlt?: string;
}

function WhiteBannerSec(
  {
    description,
    firstPartnerUrl,
    firstPartnetAlt,
    secPartnerUrl,
    secPartnetAlt,
  }: Props,
) {
  return (
    <div class="bg-white w-full min-w-full h-52 md:h-40 md:flex flex-row justify-center items-center">
      <h1 class="italic text-parceiros font-extrabold text-lg lg:text-3xl text-center py-4">
        {description}
      </h1>
      <div class="w-full flex flex-row justify-around md:w-1/2 lg:w-1/3">
        <Image
          class=""
          src={firstPartnerUrl}
          alt={firstPartnetAlt}
          width={184}
          height={60}
        />
        <Image
          class=""
          src={secPartnerUrl}
          alt={secPartnetAlt}
          width={140}
          height={84}
        />
      </div>
    </div>
  );
}

export default WhiteBannerSec;
