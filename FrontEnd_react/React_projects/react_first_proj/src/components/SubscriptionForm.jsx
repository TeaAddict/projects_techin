const SubscriptionForm = () => {
  return (
    <>
      <div className="subscription">
        <h1 className="subscription__h1">SUBSCRIBE</h1>
        <p className="subscription__p">
          Sign up with your email address to receive news and updates.
        </p>
        <form className="subscription__form">
          <div className="subscription__div">
            <input
              type="text"
              placeholder="First name"
              className="subscription__input"
            />
            <input
              type="text"
              placeholder="Last name"
              className="subscription__input"
            />
            <input
              type="text"
              placeholder="Email"
              className="subscription__input"
            />
          </div>
          <div className="subscription-form__div">
            <input className="subscription__button" value={"Subscribe"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscriptionForm;
