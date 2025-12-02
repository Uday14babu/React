import {twMerge} from "tailwind-merge";

interface NavBarProps{
    imageSrc:string;
    title:string;
    containerClass?:string;
}

function NavBarComp({NavBarProps}:{NavBarProps:NavBarCompProps}){
    return(
        <>
        <header className={twMerge('sticky top-0 z-10 flex flex-col w-full items-center justify-between bg-white p-4', NavBarProps.containerClass)}>
            <div className="flex items-center">
                <img src={NavBarProps.imageSrc} alt="logo" className="h-8 w-8"/>
                <span className="font-bold uppercase">
                    {NavBarProps.title}
                </span>
            </div>
        </header>
        </>
    );
};

export default NavBarComp;