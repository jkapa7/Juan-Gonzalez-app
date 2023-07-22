import Button from "./Button";

function Navbar() {
  return (
    <div>
      <div>
        <h2>Juan Daniel Gonzalez</h2>
      </div>

      <div>
        <a>About me</a>

        <a>Portfolio</a>

        <button>EN</button>

        <Button text="let's talk" />
      </div>
    </div>
  );
}

export default Navbar;
