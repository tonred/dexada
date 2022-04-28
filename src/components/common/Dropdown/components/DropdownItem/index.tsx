import { useLanguageStore } from "@/stores/Languages";
import * as React from "react";

import "./index.scss";
import {Lang} from "@/components/common/Dropdown";

type TDropdownItem = {
    onClick: () => void;
    item: Lang;
};

export function DropdownItem({ onClick, item }: TDropdownItem) {
    const language = useLanguageStore();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const setLanguage = (item: string) => {
        language.setLanguage(item);
        onClick();
    };

    return (
        <li
            onClick={() => setLanguage(item.key)}
            key={`${item}-item`}
            className="language_dropdown-item"
        >
            {/* eslint-disable-next-line no-nested-ternary */}
            {item.value}
        </li>
    );
}
