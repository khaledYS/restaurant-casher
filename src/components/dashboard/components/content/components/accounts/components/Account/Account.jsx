import PrettyDate from "../../../../../../../others/PrettyDate";

function Account(props) {
    console.log(props)
    return (
        <div className="w-full px-2 py-4 text-lg my-2 bg-zinc-500">
            <span>
                {props.email}
            </span>
            <span>
                <PrettyDate date={props.date.toDate()} />
            </span>
        </div>
    );
}

export default Account;