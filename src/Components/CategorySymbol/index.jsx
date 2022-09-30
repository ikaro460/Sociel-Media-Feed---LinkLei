import {
  CategoryArtigoIcon,
  CategoryEventoIcon,
  CategoryPostIcon,
} from "../../graphics";
import { StyledSymbol } from "./styles";

//Component for rendering the respective category symbol

export const CategorySymbol = ({ category }) => {
  return (
    <StyledSymbol>
      {category === "Post" ? (
        <CategoryPostIcon />
      ) : category === "Evento" ? (
        <CategoryEventoIcon />
      ) : (
        <CategoryArtigoIcon />
      )}
    </StyledSymbol>
  );
};
