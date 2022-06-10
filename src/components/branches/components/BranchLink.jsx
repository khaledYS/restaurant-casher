import { Link } from "react-router-dom";
import PrettyDate from "../../others/PrettyDate";

function BranchLink({branch}) {
    console.log(branch.createdAt.toDate())
    return (
        <div className="rounded-2xl bg-[#484c57] w-fit block">
            <Link to={branch.id} title={branch.id} className=" h-fit w-fit flex flex-wrap flex-col justify-between appearance-none text-xl">
                <div>
                    {branch.name}-{branch.location}
                </div>
                <div>
                    <PrettyDate date={branch.createdAt.toDate()} />
                </div>
            </Link>
        </div>
    );
}

export default BranchLink;