import { Icon } from "@iconify-icon/react";

export default function SideButton({ top }) {
  const buttonStyle = `fixed right-2 text-2xl `;
  return (
    <>
      <Icon className={`${buttonStyle} top-[180px] `} icon="ph:arrow-up-bold" />
      <Icon
        className={`${buttonStyle} bottom-[50px]`}
        icon="ph:arrow-down-bold"
      />
    </>
  );
}
