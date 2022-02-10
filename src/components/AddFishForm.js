import { useRef } from 'react';

const AddFishForm = (props) => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const statusRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const createFish = (e) => {
    e.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addFish(fish);
    // refresh the form
    e.currentTarget.reset();
  };

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input
        name="name"
        required
        ref={nameRef}
        type="text"
        placeholder="Name"
      />
      <input
        name="price"
        required
        ref={priceRef}
        type="number"
        placeholder="Price"
      />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" ref={descRef} placeholder="Desc" />
      <input
        name="image"
        required
        ref={imageRef}
        type="text"
        placeholder="Image"
      />
      <button type="submit">+ Add Fish</button>
    </form>
  );
};

export default AddFishForm;
