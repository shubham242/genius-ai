import Image from "next/image";

interface EmptyProps {
  label: string;
}
export const Empty = (props: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <Image alt="Empty" src="/empty.png" fill />
      </div>
      <p className="text-mutd-foreground text-sm text-center">{props.label}</p>
    </div>
  );
};
