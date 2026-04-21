import useUser from "@/hooks/useUser";
import Image from "next/image";
import React from "react";

interface AvatarProps {
    userId: string;
  isLarge?: boolean;
  isOutlined?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId,  isLarge, isOutlined }) => {
    const { data: user, isLoading, error} = useUser(userId)
  return (
    <div
      className={`
      relative
      rounded-full
      cursor-pointer
      hover:opacity-90 
        ${isOutlined ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        transition 
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        // onClick={onClick}
        src={user?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
