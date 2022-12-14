import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TEMPLATES } from './templates';

interface IProps {
  children?: React.ReactElement[];
  partialVisbile?: boolean;
  showDots?: boolean;
  isLoading?: boolean;
  removeArrowOnDeviceType?: string[];
  focusOnSelect?: boolean;
  infinite?: boolean;
  template: 'ONE_SLIDE_PER_PAGE';
  deviceType?: string;
}

const CommonCarousel: React.FunctionComponent<IProps> = React.memo(
  ({
    children,
    partialVisbile,
    showDots,
    removeArrowOnDeviceType,
    focusOnSelect,
    infinite,
    template,
    deviceType,
  }: IProps): JSX.Element => {
    return (
      <Carousel
        responsive={TEMPLATES[template]}
        partialVisbile={partialVisbile}
        removeArrowOnDeviceType={
          removeArrowOnDeviceType || ['mobile', 'tablet', 'desktop']
        }
        showDots={showDots}
        focusOnSelect={focusOnSelect}
        infinite={infinite}
        deviceType={deviceType || 'mobile'}
      >
        {children}
      </Carousel>
    );
  }
);

export { CommonCarousel };
