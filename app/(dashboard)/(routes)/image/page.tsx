"use client";
import { Heading } from "@/components/heading";
import { ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const ImagePage = () => {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Our most advanced conversational model."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};
export default ImagePage;
