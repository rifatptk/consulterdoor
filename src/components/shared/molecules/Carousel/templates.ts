const ONE_SLIDE_PER_PAGE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 70,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 70,
  },
};

const TEMPLATES = {
  ONE_SLIDE_PER_PAGE
};

export { TEMPLATES };
