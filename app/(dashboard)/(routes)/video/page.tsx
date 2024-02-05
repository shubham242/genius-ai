"use client";
import { Heading } from "@/components/heading";
import { VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const VideoPage = () => {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Our most advanced conversational model."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};
export default VideoPage;
