() => {
  const [startDate, setStartDate] = useState(new Date('2020', '07', '29', '17', '50', '12', '00'));
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      onTimeChange={date => setStartDate(date)}
      timeInputLabel="Time"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
      timeFormat="12"
      timeValue={startDate}
    />
  );
};
