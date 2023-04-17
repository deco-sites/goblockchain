import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col md:flex-row justify-around items-center h-56 md:h-36 md:px-5">
      {/* Desktop */}
      <h1 class="md:hidden text-footertxt text-lg text-center pt-6">
        Um produto
      </h1>
      <a
        class="md:hidden"
        href="https://www.deco.cx"
        aria-label="powered by https://www.deco.cx"
      >
        <Image
          class=""
          src={"https://goblockchain.io/wp-content/uploads/2023/01/LOGO-GOBLOCK.png.webp"}
          alt={"myway mão"}
          width={164}
          height={44}
        />
      </a>
      {/* Desktop */}
      <div class="hidden md:flex items-center gap-2">
        <h1 class="text-footertxt text-lg ">
          Um produto
        </h1>
        <a
          href="https://www.deco.cx"
          aria-label="powered by https://www.deco.cx"
        >
          <Image
            class=""
            src={"https://goblockchain.io/wp-content/uploads/2023/01/LOGO-GOBLOCK.png.webp"}
            alt={"myway mão"}
            width={164}
            height={44}
          />
        </a>
      </div>
      <div class="flex flex-col mb-4 md:mb-0 lg:flex-row justify-center items-center gap-3 text-footertxt text-lg">
        <h1 class="truncate ">
          <span class="pr-2 hover:text-white transition cursor-pointer duration-500">
            Politica de privacidade
          </span>|<span class="pl-2 hover:text-white transition cursor-pointer duration-500">
            Trabalhe com a gente
          </span>{" "}
          |
        </h1>
        <h1 class="truncate hover:text-white transition cursor-pointer duration-500">
          Para devs
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
