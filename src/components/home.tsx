import classNames from "classnames";
import { PetProp, SearchCriteria } from "models/model";
import React from "react";
import Service from "services/petService";
import { iconList } from "store/icons";
import { petImages } from "store/pets";
import { useStyles } from "style/common-style";
import { BodyContent, LandingPageImage } from "style/components/body-style";
import { fetchImage } from "utils/urlFormatter";
import { IconSlider } from "./iconPaginator";
import { LocationSelector } from "./LocationSelector";
import { PetShow } from "./petToShow";
import accessToken from "hooks/useAuth";

const TitleText = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.display_text)}>
      Search for all kind of pet from verified sellers in Thailand
    </div>
  );
};
const Home = () => {
  
  const {getAccessToken}=accessToken()
  const [petList, setPetList] = React.useState<PetProp[]>([]);
  const [criteria, setCriteria] = React.useState<SearchCriteria>(
    {} as SearchCriteria
  );

  React.useEffect(() => {
    reloadPetList(criteria);
  }, [criteria]);
  const reloadPetList = (criteria: SearchCriteria) => {
    Service.searchPets(criteria)
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
      })
      .catch((e: any) => {
        console.log(e);
      });
  };
  return (
    <BodyContent>
      <LandingPageImage preview={false} src={fetchImage(['landing.jpg'])} />
      <TitleText />
      <LocationSelector
        locationSearched={(value) =>
          setCriteria((c) => ({ ...c, location: value }))
        }
        locationSelected={(value) =>
          setCriteria((c) => ({ ...c, location: value }))
        }
      />
      <IconSlider
        displaySize={8}
        list={iconList}
        selectedIcon={(value) => {
          setCriteria((c) => ({ ...c, type: value }));
        }}
      />
      <PetShow petlist={petList} style={{justifyContent:'center'}}/>
    </BodyContent>
  );
};

export default Home;
