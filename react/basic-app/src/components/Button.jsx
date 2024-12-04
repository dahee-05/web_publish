

export default function Button({name, type}){

  return (
    <>
      <div>
        <button type={type}>{name}</button>
      </div>
    </>
  );
};