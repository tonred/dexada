import { LANGUAGES } from "@/constants";
import { useLanguageStore } from "@/stores/Languages";
import * as React from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import "./index.scss";
import { Icon } from "@/components/common/Icon";
import { ucFirst } from "@/utils/strins";

function Languages(): JSX.Element {
    const language = useLanguageStore();

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const setLanguage = (item: string) => {
        language.setLanguage(item);
        localStorage.setItem("lang", item);
        setIsOpen(false);
    };

    return (
        <div className="languages">
            <div onClick={toggleList} className="picked-language">
                {ucFirst(language.language)}
                <Icon
                    className={cn(
                        "language-select__arrow",
                        isOpen && "list-opened"
                    )}
                    icon="arrowDown"
                />
            </div>
            {isOpen && (
                <ul>
                    {LANGUAGES.map(
                        (item) =>
                            item !== language.language && (
                                <li
                                    onClick={() => setLanguage(item)}
                                    key={`${item}-item`}
                                >
                                    {ucFirst(item)}
                                </li>
                            )
                    )}
                </ul>
            )}
        </div>
    );
}

export default observer(Languages);
