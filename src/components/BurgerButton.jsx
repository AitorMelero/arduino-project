import { useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useMenuOpen } from "../hooks";

export const BurgerButton = ({ classStyles }) => {
    const { menuIsOpen, handleToggleMenu, hiddenMenu } = useMenuOpen();

    useEffect(() => {
        // Add an event listener for the resize event
        window.addEventListener("resize", hiddenMenu);

        // Remove the listener event when the component unmounts
        return () => {
            window.removeEventListener("resize", hiddenMenu);
        };
    }, []);

    return (
        <button className={classStyles} onClick={handleToggleMenu}>
            {menuIsOpen ? <IconX color="rgb(20, 158, 202)" /> : <IconMenu2 />}
        </button>
    );
};
