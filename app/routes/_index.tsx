/*นาย พฤทธิ์ พลนิกร 026640491032-2*/
import type { MetaFunction } from "@remix-run/node";
import { PetHomePage } from "./PetHomePage";
import Menu from "./template/menu";
import Footers from "./template/footer";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    
    <div className="font-sans p-4">
      <Menu />
      <PetHomePage />
      <Footers />
    </div>
  );
}
