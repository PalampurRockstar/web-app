import { ReactComponent as PigIcon } from "../assets/icons/pig.svg";
import { ReactComponent as TurtleIcon } from "../assets/icons/turtle.svg";
import { ReactComponent as HedgehogIcon } from "../assets/icons/hedgehog-2.svg";
import { ReactComponent as Chameleon } from "../assets/icons/chameleon.svg";
import { IconProp } from "components/iconPaginator";
import { importAll } from "./pets";
import { Image } from "antd";

const iconFiles = Array.from(
  new Set(
    Object.values(
      importAll(
        require.context(
          "../assets/images/pet-slider",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    )
  )
);
export const iconList: IconProp[] = iconFiles.map(
  (each) =>
    ({
      icon: <Image src={`${each}`} preview={false} />,
    } as IconProp)
);
