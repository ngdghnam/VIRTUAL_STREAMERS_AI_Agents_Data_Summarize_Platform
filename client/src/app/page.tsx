import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const message: AbstractIntlMessages = await getMessages({ locale });
  const title = message.appName;
  const description = message.description;
  return {
    title,
    description,
  };
}

export default function Home() {
  // Add explaination
  // Push code for hnam/dev
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto my-6 w-3xl p-4 flex items-center justify-between gap-2 flex-wrap text-center shadow-md rounded-2xl border-2">
        <Button variant="default" className="w-[48%] cursor-pointer">
          Default
        </Button>
        <Button variant="secondary" className="w-[48%] cursor-pointer">
          Secondary
        </Button>
        <Button variant="outline" className="w-[48%] cursor-pointer">
          Outline
        </Button>
        <Button variant="destructive" className="w-[48%] cursor-pointer">
          Destructive
        </Button>
      </div>
    </div>
  );
}
