import { useRef } from "react";
import { useEffect } from "react";
import { LoadingAnimation } from "../../graphics";
import { useCurrentPage } from "../../providers/CurrentPage";
import { usePostList } from "../../providers/PostListProvider";
import { StyledContainer } from "./styles";

export const NoMorePosts = () => {
  const { setCurrentPage } = useCurrentPage();
  const { totalCount, postList } = usePostList();
  const containerRef = useRef();

  // if this is false it means the list has ended
  const end = postList.length < totalCount;

  const options = {
    root: containerRef.current,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    console.log("mount observer");
    const instersectionObserver = new IntersectionObserver(([entry]) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentPage((currentPage) => currentPage + 1);
        console.log("observed");
        //setCurrentPage((actualCurrentPage) => actualCurrentPage + 1);
      }
    }, options);
    instersectionObserver.observe(containerRef.current);

    return () => instersectionObserver.disconnect();
  }, []);

  return (
    <>
      {end ? (
        <div ref={containerRef}>
          <LoadingAnimation />
        </div>
      ) : (
        <StyledContainer>
          <h5>Não existem mais itens a serem exibidos</h5>
        </StyledContainer>
      )}
    </>
  );
};
