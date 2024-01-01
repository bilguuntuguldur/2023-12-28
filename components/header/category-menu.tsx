"use client"

import Container from "../ui/container";
import Link from "next/link";
import Button from "@/components/ui/button"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MenuProps {
    data: Category[];
}

const Menu: React.FC<MenuProps> = ({ data }) => {
    const pathname = usePathname();
   
    const routes = data.map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    }));
  
    return (
      <Container>
        <div className="mx-2 hidden items-center space-x-4 md:flex lg:space-x-6">
          <Button className="main_secondry_bg mr-16 text-sm">
            Цэцэг үзэх
          </Button>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sn font-medium transition-colors text-rose-700 hover:main_color"
              >
              {route.label}
            </Link>
          ))}
        </div>
      </Container>
    );
  };
  
  export default Menu;