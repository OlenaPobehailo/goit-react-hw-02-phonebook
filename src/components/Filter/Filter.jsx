import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
