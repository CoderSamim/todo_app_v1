function TodoItem1() {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">9/8/2024</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mybutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
