import { FaBars, FaSave } from "react-icons/fa";

const App = () => {
    return (
        <div className="container mx-auto bg-slate-800 h-screen">
            <nav className="bg-slate-700 flex">
                <button className="bg-slate-600 px-6">
                    <FaBars className="text-lg scale-x-[200%]" />
                </button>
                <div className="py-2 flex items-center">
                    <a href="#" className="px-8 tracking-widest font-bold">MARKDOWN</a>
                    <div className="border h-6"></div>
                </div>
				<div className="ml-auto flex items-center py-4">
					<button className="flex items-center gap-x-2 bg-orange-600 px-4 py-2 rounded shadow mr-8">
						<FaSave/>
						<span>
							Save changes
						</span>
					</button>
				</div>	
            </nav>
        </div>
    );
};

export default App;
