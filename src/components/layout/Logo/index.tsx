import * as React from 'react'

type Props = {
    ratio?: number;
}

export function Logo({ ratio = 1 }: Props): JSX.Element {
    return (
        <svg
            width={126 * ratio}
            height={28 * ratio}
            viewBox="0 0 126 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_573_1159)">
                <path d="M37.0184 12.32H27.0684V7.20999H39.1555V3.5H22.8293V24.5H39.1555V20.79H27.0684V15.785H37.0184V12.32Z" fill="#2F66F2" />
                <path d="M60.4651 3.5H55.3502C54.6145 4.83 52.267 8.57499 51.5313 9.87001C51.3562 10.255 50.8657 11.34 50.6904 11.655L49.8848 9.87001L46.0309 3.5H40.9157L47.4674 13.755L40.7756 24.5H45.8556L49.8146 17.78L50.6904 16.03L51.5313 17.78L55.5252 24.5H60.6404L53.8436 13.755L60.4651 3.5Z" fill="#2F66F2" />
                <path d="M66.4404 24.5H61.6372L72.4356 3.5H73.172L84.0056 24.5H79.2022L76.1171 18.025L72.9264 11.165H72.6461L69.4556 18.025L69.21 18.48H71.5207L72.6461 21.63H67.7727L66.4404 24.5Z" fill="#2F66F2" />
                <path d="M105.782 24.5H100.979L111.777 3.5H112.514L123.347 24.5H118.544L115.459 18.025L112.268 11.165H111.988L108.797 18.025L108.552 18.48H110.863L111.988 21.63H107.114L105.782 24.5Z" fill="#2F66F2" />
                <path d="M8.26823 3.5C15.1701 3.5 19.4443 7.83999 19.4443 14C19.4443 20.16 15.1701 24.5 8.26823 24.5L4.23921 20.79H7.98794C12.052 20.79 15.065 18.41 15.065 14C15.065 9.59 12.052 7.20999 7.98794 7.20999H4.23921L0 3.5H8.26823Z" fill="#2F66F2" />
                <path d="M89.7979 3.5C96.6997 3.5 100.974 7.83999 100.974 14C100.974 20.16 96.6997 24.5 89.7979 24.5L85.7688 20.79H89.5176C93.5817 20.79 96.5946 18.41 96.5946 14C96.5946 9.59 93.5817 7.20999 89.5176 7.20999H85.7688L81.5296 3.5H89.7979Z" fill="#2F66F2" />
            </g>
            <defs>
                <clipPath id="clip0_573_1159">
                    <rect
                        width="123.375" height="21" fill="white"
                        transform="translate(0 3.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
