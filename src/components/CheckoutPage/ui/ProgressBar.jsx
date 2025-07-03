import styles from './ProgressBar.module.css';

const steps = ['cart', 'details', 'shipping', 'payment'];

const ProgressBar = ({ currentStep }) => {
  return (
    <nav className={styles.progressBar}>
      {steps.map((step, index) => (
        <div key={step} className={styles.stepWrapper}>
          <span
            className={
              currentStep === step
                ? styles.activeStep
                : index < steps.indexOf(currentStep)
                ? styles.completedStep
                : styles.inactiveStep
            }
          >
            {step.charAt(0).toUpperCase() + step.slice(1)}
          </span>
          {index < steps.length - 1 && (
            <span className={styles.separator}>›</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default ProgressBar;
