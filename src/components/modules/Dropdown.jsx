import "@/styles/dropdown.css";

function Dropdown() {
  return (
    <div class="dropdown">
      <button class="dropbtn">Categories</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default Dropdown;
