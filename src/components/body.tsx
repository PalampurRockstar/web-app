import { Input, Layout, Select, theme } from "antd";
import classNames from "classnames";
import React from "react";
import Service from "services/petService";
import { iconList } from "store/icons";
import { petImages } from "store/pets";
import { useStyles } from "style/common-style";
import { BodyContent, LandingPageImage } from "style/components/body-style";
import LandingPageImagePath from "../assets/images/landing.jpg";
import { IconSlider } from "./iconPaginator";
import { LocationSelector } from "./LocationSelector";
import { PetProp, PetShow } from "./petToShow";

const TitleText = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.display_text)}>
      Search for all kind of pet from verified sellers in Thailand
    </div>
  );
};
const AppBody = () => {
  const [petList, setPetList] = React.useState<PetProp[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  React.useEffect(() => {
    reloadPetList();
  }, []);
  const reloadPetList = () => {
    Service.getAll()
      .then((response: any) => {
        const responsePetList = response.data as PetProp[];
        setPetList(
          responsePetList.map((each, i) => {
            return {
              ...each,
              image: petImages[i % petImages.length],
            };
          })
        );
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };
  return (
    <BodyContent>
      <LandingPageImage preview={false} src={LandingPageImagePath} />
      <TitleText />
      <LocationSelector />
      <IconSlider displaySize={8} list={iconList} />
      <PetShow petlist={petList} />
    </BodyContent>
  );
};

export default AppBody;
