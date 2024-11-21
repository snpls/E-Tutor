import { NavbarMenu } from "../../data/data"

interface Props{
    isOpen: boolean;
}

const ResponsiveMenu = ({isOpen}: Props) => {
  return (
    <div className="lg:hidden">
    <div className={isOpen ? "absolute -top-[50%] w-full" : "absolute top-[20]  w-full"}>
        <div className="container">
            <ul className=" bg-yellow-400 grid gap-6 py-10 place-items-center rounded-lg text-white font-poppins text-[20px] font-semibold uppercase">
                {NavbarMenu.map((NavbarMenuItem)=> (
                    <li key={NavbarMenuItem.id}>
                        <a href={NavbarMenuItem.link}>{NavbarMenuItem.title}</a>
                    </li>
                ))}
                </ul>
        </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu