const Message = ({ data, user, ...rest }) => {
  var options = {
    // weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (timeStamp) =>
    new Intl.DateTimeFormat("en-GB", options).format(timeStamp);
  return (
    <div
      className={
        user && user.name !== data.author
          ? "app-message"
          : "app-message app-message-right"
      }
      {...rest}
    >
      {user && user.name !== data.author ? (
        <div>{data.author}</div>
      ) : (
        <div>You</div>
      )}
      <div>{data.message}</div>
      <div>{formatDate(data.timestamp)}</div>
    </div>
  );
};

export default Message;
