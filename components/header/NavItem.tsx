import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center">
      <a
        href={href}
        class="hover:text-blue-400 transition px-4 py-3 flex flex-row items-center gap-2"
      >
        <Text
          class="hover:text-blue-400 transition duration-500 border-solid border-b border-white truncate"
          variant="menu"
        >
          {label}
        </Text>
        {children && children.length > 0 &&
          (
            <Icon
              class="hover:text-blue-400"
              id="ChevronDown"
              width={16}
              height={16}
              strokeWidth={1}
              fill="none"
            />
          )}
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-t-4 border-blue-400 transition duration-500  `}
            style={{ top: "60px" }}
          >
            <ul class="flex items-start justify-center gap-6">
              {children.map((node) => (
                <li class="p-6 hover:text-blue-400 transition duration-500">
                  <a class="group-hover:text-blue-400" href={node.href}>
                    <Text variant="menu">{node.label}</Text>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="group-hover:text-blue-400" href={leaf.href}>
                          <Text variant="caption">{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
