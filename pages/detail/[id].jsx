import Header from 'components/Header';
import CarDetail from 'components/CarDetail';
import { CarContext } from 'context/CarContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    carState: { carList, selectedCar },
    findCars,
  } = useContext(CarContext);

  useEffect(() => {
    findCars(id);
  }, [carList]);

  return (
    <section>
      <Header title="차량상세" />
      {selectedCar && <CarDetail selectedCar={selectedCar} />}
    </section>
  );
};

export default Detail;
