import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {}

const ServicePage: React.FC<IServicePageProps> = (props) => {
  return (
    <section className={classes.service}>
      <h2 className={classes.service__title}>Konfigurator Servisa</h2>
    </section>
  );
};

export default ServicePage;
