import { useLanguageStore } from "@/stores/Languages";
import * as React from "react";

import "./index.scss";

type TDropdownItem = {
    onClick: () => void;
    item: string;
};

export function DropdownItem({ onClick, item }: TDropdownItem) {
    const language = useLanguageStore();

    const setLanguage = (item: string) => {
        language.setLanguage(item);
        onClick();
    };

    return (
        <li
            onClick={() => setLanguage(item)}
            key={`${item}-item`}
            className="language_dropdown-item"
        >
            {item}
        </li>
    );
}
