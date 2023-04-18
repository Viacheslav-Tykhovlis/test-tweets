export const DropDown = ({ getFilter }) => {
  return (
    <div>
      <label for="filter" style={{ marginRight: 20 }}>
        Filter
      </label>
      <select
        id="filter"
        name="filter"
        onChange={(e) => {
          getFilter(e.target.value);
        }}
      >
        <option value="showAll" selected>
          Show all
        </option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </div>
  );
};
