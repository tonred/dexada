import { LANGUAGES } from "@/constants";
import { useLanguageStore } from "@/stores/Languages";
import * as React from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import "./index.scss";
import { Icon } from "@/components/common/Icon";
import { Dropdown } from "@/components/common/Dropdown";

function Languages(): JSX.Element {
    const language = useLanguageStore();

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const closeList = () => {
        setIsOpen(false);
    };

    return (
        <div className="languages">
            <div onClick={toggleList} className="picked-language">
                {language.language === 'ja' ? '日本語' : language.language }
                <Icon
                    className={cn(
                        "language-select__arrow",
                        isOpen && "list-opened"
                    )}
                    icon="arrowDown"
                />
            </div>
            <Dropdown items={LANGUAGES} onCLick={closeList} isOpen={isOpen} />
        </div>
    );
}

export default observer(Languages);
