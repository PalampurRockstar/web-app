import { Input, Layout, Select, theme } from "antd";
import classNames from "classnames";
import { iconList } from "store/icons";
import { petList } from "store/pets";
import { useStyles } from "style/common-style";
import { BodyContent, LandingPageImage } from "style/components/body-style";
import LandingPageImagePath from "../assets/images/landing.jpg";
import { IconSlider } from "./iconPaginator";
import { LocationSelector } from "./LocationSelector";
import { PetShow } from "./petToShow";

const TitleText = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.display_text)}>
      Search for all kind of pet from verified sellers in Thailand
    </div>
  );
};
const AppBody = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
