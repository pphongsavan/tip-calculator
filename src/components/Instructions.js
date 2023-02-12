const Instructions = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>Tip Calculator</h1>
          <div className="alert alert-primary">
            <p className="instr-txt">
              <b className="how-to">How to Use:</b>
              <br></br>
              Fill Subtotal and Tip to get Percent.
              <br></br>
              Fill Subtotal and Percent to get Tip.
              <br></br>
              Double-tap a row to highlight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
