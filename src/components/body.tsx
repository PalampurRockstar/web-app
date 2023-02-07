import { Divider, Input, Layout, Select, theme } from "antd";
import classNames from "classnames";
import { iconList } from "store/icons";
import { useStyles } from "style/common-style";
import { BodyContent, LandingPageImage } from "style/components/body-style";
import LandingPageImagePath from "../assets/images/landing.jpg";
import { IconSlider } from "./iconPaginator";
import { LocationSelector } from "./LocationSelector";
const { Header, Content, Footer } = Layout;
const { Search, Group } = Input;
const { Option } = Select;
const AppBody = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const classes = useStyles();

  return (
    <BodyContent>
      <LandingPageImage preview={false} src={LandingPageImagePath} />
      <div className={classNames(classes.display_text)}>
        Search for all kind of pet from verified sellers in Thailand
      </div>
      <LocationSelector />
      <IconSlider displaySize={8} list={iconList} />
    </BodyContent>
  );
};

export default AppBody;
