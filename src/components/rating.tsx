import { Rate } from "antd";
import styled from "styled-components";

interface RatingProp {
  rating: number;
}
export const Rating = ({ rating }: RatingProp) => {
  return (
    <DIV>
      <Rate
        className="rating"
        allowHalf
        defaultValue={rating >= 0 && rating <= 5 ? rating : 1}
        style={{ fontSize: 11 }}
      />
    </DIV>
  );
};

const DIV = styled.div`
  .rating {
    li {
      margin-inline-end: 1px;
    }
  }
`;
