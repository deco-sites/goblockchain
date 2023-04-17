import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`lg:hidden flex flex-row justify-between items-center h-[65px] border-b-1 border-default w-full px-2 py-2 gap-2`}
      >
        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[65px] pl-4`}
          aria-label="Store logo"
        >
          <Image
            class=""
            src={"https://goblockchain.io/wp-content/uploads/2022/12/logo_goBlock.png.webp"}
            alt={"myway mão"}
            width={55}
            height={67}
          />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="menu" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="h-[95px] shadow-lg hidden lg:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Image
              class=""
              src={"https://goblockchain.io/wp-content/uploads/2022/12/logo_goBlock.png.webp"}
              alt={"myway mão"}
              width={55}
              height={67}
            />
          </a>
        </div>

        <div class="flex-none w-44 flex items-center justify-end gap-2 pr-10">
          {items.map((item) => <NavItem item={item} />)}
          <ul class="flex flex-row gap-3">
            <li>
              <a>
                <Icon
                  class="rounded-full opacity-75 hover:opacity-100 cursor-pointer"
                  id="USFlag"
                  width={25}
                  height={25}
                  strokeWidth={2}
                  fill="none"
                />
              </a>
            </li>
            <li>
              <a>
                <Icon
                  class="object-cover bg-cover rounded-full opacity-75 hover:opacity-100 cursor-pointer"
                  id="BRFlag"
                  width={25}
                  height={25}
                  strokeWidth={2}
                  fill="none"
                />
              </a>
            </li>
            <li>
              <a>
                <Icon
                  class="rounded-full opacity-75 hover:opacity-100 cursor-pointer"
                  id="SPFlag"
                  width={25}
                  height={25}
                  strokeWidth={2}
                  fill="none"
                />
              </a>
            </li>
          </ul>
          <Button
            class="text-blue-400 hover:scale-110 transition font-bold"
            as="a"
            variant="icon"
            href="/"
            aria-label="Login"
          >
            Login
            <Icon
              id="Return"
              width={20}
              height={20}
              strokeWidth={2}
              fill="none"
            />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
