"use client";
import { Heading } from "@/components/heading";
import { Settings } from "lucide-react";
import { useForm } from "react-hook-form";

const SettingsPage = () => {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading title="Settings" description="" icon={Settings} />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};
export default SettingsPage;
