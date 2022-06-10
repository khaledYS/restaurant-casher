// returns a pretty date
function PrettyDate( { date = new Date } ){
	let newDate = new Date(date)
	return(
		<span className="font-medium">
		<span>
			{newDate.getHours()}:
			{newDate.getMinutes()}:
			{newDate.getSeconds()}
		</span>
		&nbsp;
		{newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()}/
		{newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()}/
		{newDate.getFullYear()}
	</span>
	)
}

export default PrettyDate
