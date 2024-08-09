function Categories({ option }) {
    return (
        <option value={option} className="capitalize uppercase">
            {option}
        </option>
    );
}

export default Categories;
