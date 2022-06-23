import { CommonCarousel } from '../../shared';

function ServiceCardList() {
  const { innerWidth: width } = window;

  const card = (color: any) => (
    <div
      style={{
        height: 150,
        background: color,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      test
    </div>
  );
  return (
    <div className="container">
      <div className="row align-items-center">
        {width < 465 ? (
          <CommonCarousel
            template="ONE_SLIDE_PER_PAGE"
            partialVisbile={true}
            removeArrowOnDeviceType={['mobile', 'tablet', 'desktop']}
            showDots={true}
          >
            <div>{card('red')}</div>
            <div>{card('green')}</div>
            <div>{card('yellow')}</div>
            <div>{card('blue')}</div>
            <div>{card('red')}</div>
            <div>{card('green')}</div>
            <div>{card('yellow')}</div>
          </CommonCarousel>
        ) : (
          <>
            <div
              className="col-md col-xl-4"
              style={{ width: 300, margin: 'auto', padding: 0 }}
            >
              {card('red')}
            </div>
            <div
              className="col-md col-xl-4"
              style={{ width: 300, margin: 'auto', padding: 0 }}
            >
              {card('red')}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export { ServiceCardList };
