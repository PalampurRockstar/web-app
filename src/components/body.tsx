import { Input, Layout, Select, theme, Image, Divider } from "antd";
import {
  BodyContent,
  LandingPageImage,
  LocationGroup,
} from "style/components/body-style";
import LandingPageImagePath from "../assets/images/landing.jpg";
import SearchIcon from "../assets/icons/search.svg";
import { useStyles } from "style/common-style";
import classNames from "classnames";
import { SearchOutlined } from "@ant-design/icons";
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
      <Divider type="vertical" />
      <LocationGroup compact>
        <Select placeholder="All Locations">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Search
          placeholder="Which pet are you looking for?"
          allowClear
          onAnimationStart={() => {}}
        />
      </LocationGroup>
    </BodyContent>
  );
};

export default AppBody;
