// returns a pretty date
function PrettyDate( { date = new Date } ){
	return(
		<span className="font-medium">&nbsp;
		<span>
			{date.getHours()}:
			{date.getMinutes()}:
			{date.getSeconds()}
		</span>
		&nbsp;
		{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/
		{date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}/
		{date.getFullYear()}
	</span>
	)
}

export default PrettyDate
