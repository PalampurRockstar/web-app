import { IconProp } from "components/iconPaginator";

import { fetchImage } from "utils/urlFormatter";
import { buckets } from "common/constants";

const iconNamelist=['All.svg'
,'Bird.svg'
,'Cat.svg'
,'Dog.svg'
,'Fish.svg'
,'Frog.svg'
,'Hedgehog.svg'
,'Lizard.svg'
,'Pig.svg'
,'Rabbit.svg'
,'Rat.svg'
,'Snake.svg'
,'Turtle.svg'
,'ZExotic.svg']

export const iconList = iconNamelist.map(ic=>{
  return {
    path:fetchImage([buckets.ICON_PET_SLIDER,ic]),
    name: ic,
  } as IconProp
});

