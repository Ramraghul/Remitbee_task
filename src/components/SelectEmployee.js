const SelectEmployees = ({
  employees,
  currentValue,
  onEmployeeChange,
  shift,
  weekDay,
  type,
}) => {
  return employees ? (
    <select
      id="employee"
      value={currentValue}
      onChange={(e) =>
        onEmployeeChange({ employee: e.target.value, shift, weekDay, type })
      }
    >
      <option value="">Choose Staff</option>
      {employees &&
        employees.map((employee) => {
          return <option value={employee}>{employee}</option>;
        })}
    </select>
  ) : (
    currentValue
  );
};

export default SelectEmployees;
