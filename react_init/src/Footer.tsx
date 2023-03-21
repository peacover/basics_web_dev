const Footer = () => {
  let today = new Date();

  return (
   <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>
            Peacover App - {today.getFullYear()}
          </h5>
        </div>
      </div>
    </header>
  );
}

export default Footer;
