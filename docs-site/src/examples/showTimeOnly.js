() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => console.log(date)}
      onTimeChange={date => console.log(date)}
      showTimeInput
      showTimeInputOnly
      timeFormat="24"
      timeValue={startDate}
      inline
    />
  );
};
