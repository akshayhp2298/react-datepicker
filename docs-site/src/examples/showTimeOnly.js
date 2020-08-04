() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      onTimeChange={date => setStartDate(date)}
      showTimeInput
      showTimeInputOnly
      timeFormat="24"
      timeValue={startDate}
      inline
    />
  );
};
