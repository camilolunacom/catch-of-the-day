const EditFishForm = (props) => {
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    props.updateFish(props.index, updatedFish);
  };

  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={props.fish.name}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        value={props.fish.price}
      />
      <select name="status" onChange={handleChange} value={props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" onChange={handleChange} value={props.fish.desc} />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={props.fish.image}
      />
      <button
        type="button"
        onClick={() => {
          props.deleteFish(props.index);
        }}
      >
        Remove Fish
      </button>
    </div>
  );
};

export default EditFishForm;
