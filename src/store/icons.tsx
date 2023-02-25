import { IconProp } from "components/iconPaginator";
import { importAll } from "./pets";
import { Image } from "antd";

const iconFiles = Array.from(
  new Set(
    Object.values(
      importAll(
        require.context(
          "../assets/icons/pet-slider",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    )
  )
);
export const iconList: IconProp[] = iconFiles.map((each) => {
  const fileName = `${each}`.replace(/^.*[\\\/]/, "").split(".")[0];
  return {
    icon: <Image src={`${each}`} preview={false} />,
    name: fileName,
  } as IconProp;
});

console.log("iconList : ", iconList);
