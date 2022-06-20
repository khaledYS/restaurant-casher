import { Link } from "react-router-dom";
import PrettyDate from "../../others/PrettyDate";

function BranchLink({branch}) {
    return (
        <div className="branch-link rounded-2xl bg-[#444a4f] w-fit px-4 py-3 inline-block mx-5 my-2">
            <Link to={branch.id} title={branch.id} className=" h-fit w-fit flex flex-wrap flex-col justify-between appearance-none text-2xl">
                <div>
                    {branch.name}-{branch.location}
                </div>
                <div className="text-gray-400 text-xl">
                    <PrettyDate date={branch.createdAt} />
                </div>
            </Link>
        </div>
    );
}

export default BranchLink;