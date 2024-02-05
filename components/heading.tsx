import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3">
      <div className={cn("p-2 w-fit rounded-md", props.bgColor)}>
        <props.icon className={cn("w-10 h-10", props.iconColor)} />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold">{props.title}</h2>
        <p className="text-sm text-muted-foreground">&nbsp;{props.description}</p>
      </div>
    </div>
  );
};