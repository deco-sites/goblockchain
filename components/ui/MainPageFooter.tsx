import Image from "deco-sites/std/components/Image.tsx";
import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
export interface Props {
  title: string;
}

function MainPageFooter(
  {
    title,
  }: Props,
) {
  return (
    <div class="main-page-bg h-36 flex flex-col items-center justify-center gap-2">
      <p class="italic font-bold">
        {title}
      </p>
      <ul class="flex items-center justify-center gap-4">
        <li>
          <a
            href="https://www.meetup.com/goblockchain/?_locale=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meetup2 logo"
          >
            <Icon
              class="text-black"
              width={32}
              height={32}
              id="Meetup2"
              strokeWidth={5}
            />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/goblockchain-colabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium logo"
          >
            <Icon
              class="text-black bg-contain object-contain"
              width={32}
              height={32}
              id="Medium"
              strokeWidth={5}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/GoBlockchain/GoBlockchain.github.io/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github logo"
          >
            <Icon
              class=""
              width={32}
              height={32}
              id="Github"
              strokeWidth={5}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/goblockchain/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook2 logo"
          >
            <Icon
              class=""
              width={32}
              height={32}
              id="Facebook2"
              strokeWidth={2}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/goblockchain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube logo"
          >
            <Icon
              class=""
              width={32}
              height={32}
              id="Youtube"
              strokeWidth={5}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/goblockchain/?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram logo"
          >
            <Icon
              class=""
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={2}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/goblockchain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin logo"
          >
            <Icon
              class=""
              width={32}
              height={32}
              id="Linkedin"
              strokeWidth={1}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainPageFooter;
