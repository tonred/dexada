import * as React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './index.scss'


interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    block?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'dark' | 'link' | 'icon';
    link?: string;
}


export const Button = React.forwardRef<HTMLButtonElement, Props>(({
    block,
    children,
    className,
    size,
    type,
    link,
    ...props
}, ref) => {
    const _className = classNames('btn', {
        [`btn--${size}`]: size !== undefined,
        [`btn--${type}`]: type !== undefined,
        'btn--block': block,
    }, className)

    if (link) {
        return (
            <Link
                to={link}
                className={_className}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            ref={ref}
            className={_className}
            {...props}
            type="button"
        >
            {children}
        </button>
    )
})
