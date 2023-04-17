import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow min-h-[40px] flex items-center justify-start"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li>
      <div
        class={`flex justify-between items-center w-full py-2 ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button variant="icon">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="ChevronDown"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="ChevronUp"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul class={`flex-col ${open.value === true ? "flex" : "hidden"}`}>
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="px-4 flex-grow flex flex-col divide-y divide-gray-200">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>
    </>
  );
}

export default Menu;
