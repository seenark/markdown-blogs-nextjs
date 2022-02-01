import classes from './notification.module.css';

interface INotificationProps {
  title:string
  message:string
  status:"pending" | "success" | "error" | undefined
}

const Notification: React.FunctionComponent<INotificationProps> = (props) => {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;
  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
};

export default Notification;

