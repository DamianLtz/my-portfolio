import {
  createElement,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  classname?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "classname" | "children">;

export default function Container<T extends ElementType = "div">({
  as,
  classname,
  children,
  ...props
}: ContainerProps<T>) {
  return createElement(
    as ?? "div",
    { className: cn("container mx-auto px-6", classname), ...props },
    children,
  );
}
