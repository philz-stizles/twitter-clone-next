import { IconType } from "react-icons";
import { MouseEvent, useCallback } from "react";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  alert?: boolean;
  auth?: boolean;
  href?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  onClick,
  alert,
  auth,
  href,
}) => {
  const router = useRouter();
  const {onOpen: openLoginModal} = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const clickHandler = useCallback(() => {
    if(href) {
      router.push(href)
    }
  }, [router, href]);

  return (
    <div onClick={clickHandler} className="flex flex-row items-center">
      <div
        className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
      <div
        className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
