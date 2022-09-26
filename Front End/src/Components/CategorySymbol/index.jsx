import {
  CategoryArtigoIcon,
  CategoryEventoIcon,
  CategoryPostIcon,
} from "../../graphics";
import { StyledSymbol } from "./styles";

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
