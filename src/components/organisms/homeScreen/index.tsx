import { CategoryList, ServiceCardList } from '../index';

function HomeScreen() {
  return (
    <div>
      <ServiceCardList data={[{}, {}, {}, {}, {}, {}, {}]} />
      <CategoryList data={[{}, {}, {}, {}, {}, {}, {}]} />
    </div>
  );
}

export { HomeScreen };
