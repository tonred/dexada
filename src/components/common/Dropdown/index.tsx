import * as React from "react";
import { DropdownItem } from "./components/DropdownItem";

import "./index.scss";
export type Lang = {
    key:string,
    value: string,
}
type TDropdown = {
    items: Lang[];
    onCLick: () => void;
    isOpen: boolean;
};

export function Dropdown({ items, onCLick, isOpen }: TDropdown) {
    if (!isOpen) return null;

    return (
        <ul className="language_dropdown">
            {items.map((item) => (
                <DropdownItem item={item} onClick={onCLick} />
            ))}
        </ul>
    );
}
