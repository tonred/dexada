import * as React from 'react'

import './index.scss'


export function Logo(): JSX.Element {
    return (
        <div className="logo">
            <svg
                className="logo__desktop"
                width={144}
                height={32}
                viewBox="0 0 144 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_4471_18246)">
                    <path d="M42.4787 8.25806H47.8246C50.3813 8.25806 52.3182 8.87741 53.6353 10.1161C54.9524 11.3401 55.6109 13.0949 55.6109 15.3806V16.6193C55.6109 18.8756 54.9446 20.6304 53.6121 21.8839C52.2795 23.1226 50.3503 23.7419 47.8246 23.7419H42.4787V8.25806ZM45.2679 10.6028V21.3972H47.8246C49.4361 21.3972 50.6447 21.0064 51.4505 20.2249C52.2717 19.4433 52.6823 18.2415 52.6823 16.6193V15.3806C52.6823 13.7733 52.2717 12.5788 51.4505 11.7972C50.6292 11.0009 49.4206 10.6028 47.8246 10.6028H45.2679Z" fill="#2F66F2" />
                    <path d="M60.9636 8.25806H71.4229V10.6028H63.7528V14.6064H70.0283V16.9511H63.7528V21.3972H71.4229V23.7419H60.9636V8.25806Z" fill="#2F66F2" />
                    <path d="M82.5371 17.7253L78.6323 23.7419H75.3783L80.7707 15.7124L75.8432 8.25806H79.1902L82.6068 13.6332L86.1165 8.25806H89.324L84.3965 15.624L89.7889 23.7419H86.3954L82.5371 17.7253Z" fill="#2F66F2" />
                    <path d="M103.613 19.8267H97.4535L96.1054 23.7419H93.1768L98.9875 8.25806H102.242L108.052 23.7419H104.984L103.613 19.8267ZM98.267 17.482H102.799L101.637 14.0977L100.545 10.9124L99.4524 14.0977L98.267 17.482Z" fill="#2F66F2" />
                    <path d="M112.492 8.25806H117.837C120.394 8.25806 122.331 8.87741 123.648 10.1161C124.965 11.3401 125.624 13.0949 125.624 15.3806V16.6193C125.624 18.8756 124.958 20.6304 123.625 21.8839C122.292 23.1226 120.363 23.7419 117.837 23.7419H112.492V8.25806ZM115.281 10.6028V21.3972H117.837C119.449 21.3972 120.658 21.0064 121.463 20.2249C122.285 19.4433 122.695 18.2415 122.695 16.6193V15.3806C122.695 13.7733 122.285 12.5788 121.463 11.7972C120.642 11.0009 119.433 10.6028 117.837 10.6028H115.281Z" fill="#2F66F2" />
                    <path d="M139.448 19.8267H133.288L131.94 23.7419H129.012L134.822 8.25806H138.076L143.887 23.7419H140.819L139.448 19.8267ZM134.102 17.482H138.634L137.472 14.0977L136.38 10.9124L135.287 14.0977L134.102 17.482Z" fill="#2F66F2" />
                    <path
                        fillRule="evenodd" clipRule="evenodd" d="M16.8985 1.91718C17.0844 1.92797 17.2692 1.88233 17.4296 1.78602C17.59 1.68971 17.7188 1.54707 17.7997 1.37613C17.8805 1.2052 17.9099 1.01365 17.8839 0.825725C17.858 0.637798 17.778 0.461933 17.654 0.320378C17.53 0.178822 17.3676 0.0779351 17.1873 0.0304792C17.0071 -0.0169768 16.8171 -0.00886972 16.6414 0.0537748C16.4656 0.116419 16.3121 0.230787 16.2001 0.38241C16.0882 0.534033 16.0228 0.716099 16.0124 0.905578C15.9984 1.15949 16.0839 1.40867 16.25 1.59836C16.4162 1.78804 16.6494 1.90272 16.8985 1.91718ZM25.0845 2.39223C24.9381 2.39357 24.7946 2.35062 24.6722 2.26882C24.5082 2.15925 24.3936 1.98782 24.3536 1.79217C24.3135 1.59652 24.3512 1.39266 24.4585 1.22536C24.5386 1.10046 24.6532 1.00258 24.7879 0.944102C24.9225 0.885626 25.0712 0.869184 25.215 0.896857C25.3589 0.924531 25.4914 0.995075 25.5959 1.09956C25.7004 1.20405 25.7722 1.33779 25.8021 1.48386C25.832 1.62993 25.8188 1.78176 25.764 1.92015C25.7092 2.05853 25.6155 2.17725 25.4945 2.26128C25.3735 2.34532 25.2308 2.39089 25.0845 2.39223ZM9.16352 2.3478C9.29338 2.27982 9.40062 2.17419 9.47172 2.04421C9.54282 1.91424 9.57462 1.76572 9.5631 1.61736C9.55159 1.46901 9.49728 1.32744 9.40701 1.21048C9.31674 1.09352 9.19454 1.00639 9.05581 0.960076C8.91707 0.913757 8.76799 0.910314 8.62734 0.950179C8.48669 0.990043 8.36075 1.07143 8.26537 1.18411C8.17 1.29678 8.10946 1.4357 8.09136 1.58337C8.07326 1.73104 8.09843 1.88087 8.16368 2.014C8.20755 2.10311 8.26828 2.18249 8.34238 2.24756C8.41648 2.31263 8.50248 2.3621 8.59542 2.39313C8.68836 2.42416 8.78641 2.43613 8.88391 2.42835C8.98141 2.42057 9.07644 2.3932 9.16352 2.3478ZM9.88506 17.5675C9.48105 17.105 9.27367 16.4979 9.3085 15.8796L9.30225 15.8809C9.32788 15.4263 9.48351 14.9893 9.74994 14.6239C10.0164 14.2584 10.3819 13.9805 10.8015 13.8244C11.2211 13.6683 11.6764 13.6409 12.1111 13.7455C12.5458 13.8501 12.9409 14.0822 13.2477 14.4131C13.5545 14.744 13.7596 15.1592 13.8376 15.6075C13.9156 16.0559 13.8631 16.5177 13.6866 16.9359C13.5101 17.3542 13.2173 17.7106 12.8444 17.9613C12.4715 18.2119 12.0348 18.3457 11.5881 18.3462H11.4631C10.8567 18.31 10.2891 18.03 9.88506 17.5675ZM0.36335 15.3917C0.489135 15.316 0.634093 15.2801 0.779904 15.2884C0.8769 15.2938 0.971901 15.3186 1.05945 15.3615C1.14699 15.4044 1.22536 15.4646 1.29005 15.5384C1.35474 15.6123 1.40447 15.6985 1.43639 15.792C1.4683 15.8855 1.48178 15.9846 1.47604 16.0834C1.46766 16.232 1.41624 16.3748 1.32829 16.4937C1.24034 16.6125 1.11981 16.7021 0.981919 16.7512C0.844029 16.8002 0.694975 16.8065 0.553592 16.7692C0.41221 16.7319 0.284846 16.6527 0.187595 16.5416C0.0903451 16.4306 0.0275736 16.2926 0.00721378 16.1452C-0.013146 15.9978 0.00981979 15.8475 0.0732088 15.7134C0.136598 15.5793 0.237565 15.4673 0.36335 15.3917ZM11.9643 6.00671C11.8531 6.20716 11.6861 6.3695 11.4844 6.47322C11.3504 6.54212 11.2044 6.58343 11.0547 6.59479C10.9051 6.60615 10.7547 6.58733 10.6121 6.53941C10.4696 6.49149 10.3377 6.41541 10.2241 6.31552C10.1104 6.21562 10.0171 6.09387 9.94965 5.95722C9.84806 5.75154 9.80857 5.51978 9.83617 5.29123C9.86378 5.06267 9.95723 4.8476 10.1047 4.67318C10.2522 4.49876 10.4471 4.37284 10.6648 4.31133C10.8825 4.24983 11.1132 4.25549 11.3277 4.32762C11.5422 4.39974 11.731 4.53509 11.87 4.71655C12.0091 4.898 12.0923 5.11742 12.1091 5.34706C12.1258 5.5767 12.0755 5.80626 11.9643 6.00671ZM3.67442 9.31056C3.82999 9.41485 4.0124 9.46975 4.19858 9.46832C4.38477 9.4669 4.56635 9.4092 4.72036 9.30254C4.87437 9.19588 4.99388 9.04505 5.06377 8.86913C5.13367 8.69321 5.1508 8.5001 5.11301 8.31425C5.07522 8.1284 4.9842 7.95815 4.85146 7.82505C4.71873 7.69195 4.55025 7.60197 4.36734 7.56651C4.18443 7.53105 3.99532 7.55169 3.82392 7.62582C3.65252 7.69996 3.50655 7.82426 3.40447 7.98299C3.26775 8.19558 3.21939 8.4548 3.27 8.70371C3.32062 8.95263 3.46607 9.17089 3.67442 9.31056ZM4.4211 15.0236C4.6157 14.9067 4.83993 14.8512 5.06545 14.8642C5.36801 14.8819 5.65129 15.0214 5.85306 15.2519C6.05483 15.4824 6.15858 15.7852 6.14152 16.0936C6.12856 16.3235 6.04903 16.5443 5.91299 16.7281C5.77695 16.912 5.59051 17.0505 5.37723 17.1264C5.16395 17.2022 4.93341 17.2118 4.71474 17.1541C4.49608 17.0964 4.29911 16.9739 4.14873 16.8021C3.99835 16.6303 3.90132 16.4168 3.86989 16.1888C3.83846 15.9608 3.87405 15.7284 3.97217 15.521C4.07028 15.3136 4.22651 15.1405 4.4211 15.0236ZM3.79941 22.6933C3.63332 22.7788 3.49585 22.9127 3.40436 23.0779C3.31288 23.2431 3.2715 23.4322 3.28545 23.6214C3.2994 23.8106 3.36806 23.9913 3.48274 24.1407C3.59742 24.2901 3.75298 24.4015 3.92975 24.4608C4.10652 24.5201 4.29657 24.5246 4.47587 24.4738C4.65517 24.423 4.81567 24.3192 4.93709 24.1754C5.05851 24.0317 5.13539 23.8544 5.15802 23.6661C5.18064 23.4778 5.14799 23.2869 5.0642 23.1175C5.00852 23.005 4.93163 22.9047 4.83792 22.8224C4.74421 22.7402 4.63552 22.6776 4.51805 22.6382C4.40059 22.5988 4.27666 22.5834 4.15336 22.5928C4.03005 22.6023 3.90977 22.6364 3.79941 22.6933ZM8.98899 12.6817C8.72305 12.6841 8.46237 12.6061 8.23993 12.4575C8.09207 12.3589 7.96473 12.2315 7.86521 12.0827C7.76569 11.9339 7.69594 11.7665 7.65995 11.5902C7.62397 11.4139 7.62245 11.232 7.65549 11.0551C7.68852 10.8782 7.75547 10.7096 7.85249 10.5591C7.99833 10.3324 8.20685 10.1548 8.45166 10.0489C8.69648 9.943 8.96662 9.91346 9.2279 9.96403C9.48919 10.0146 9.7299 10.143 9.9196 10.3331C10.1093 10.5231 10.2395 10.7662 10.2936 11.0316C10.3478 11.2971 10.3236 11.5729 10.2239 11.8243C10.1243 12.0757 9.95385 12.2913 9.73403 12.4439C9.51421 12.5965 9.25494 12.6793 8.98899 12.6817ZM22.3276 6.38147C22.517 6.50742 22.7388 6.57329 22.9649 6.57076C23.191 6.56824 23.4113 6.49744 23.598 6.3673C23.7846 6.23716 23.9292 6.05353 24.0135 5.83963C24.0978 5.62572 24.118 5.39115 24.0715 5.16554C24.0251 4.93994 23.914 4.73345 23.7525 4.57216C23.5909 4.41088 23.3861 4.30204 23.1638 4.25941C22.9416 4.21678 22.712 4.24227 22.504 4.33266C22.2959 4.42305 22.1189 4.57429 21.9952 4.76724C21.9128 4.89541 21.856 5.03889 21.8281 5.18947C21.8003 5.34004 21.8018 5.49474 21.8327 5.6447C21.8636 5.79466 21.9232 5.93694 22.0081 6.06337C22.093 6.1898 22.2016 6.2979 22.3276 6.38147ZM22.5076 13.6602C22.2076 13.6426 21.9072 13.6854 21.6235 13.7862C21.3398 13.887 21.0784 14.0438 20.8541 14.2475C20.4012 14.6591 20.1271 15.2372 20.0923 15.8547C20.0575 16.4723 20.2648 17.0786 20.6685 17.5403C21.0722 18.0021 21.6394 18.2814 22.2451 18.3169H22.3776C22.8189 18.3167 23.2507 18.1863 23.6209 17.9415C23.9911 17.6968 24.284 17.3481 24.4642 16.9374C24.6444 16.5268 24.7042 16.0718 24.6365 15.6273C24.5687 15.1828 24.3763 14.7678 24.0823 14.4323C23.8832 14.2034 23.6415 14.0173 23.3711 13.8848C23.1007 13.7522 22.8072 13.6759 22.5076 13.6602ZM13.0786 13.234C12.7174 13.0073 12.4254 12.6823 12.2355 12.2957C12.0609 11.9403 11.9783 11.5454 11.9954 11.1483C12.0126 10.7512 12.1289 10.3652 12.3335 10.0269C12.5381 9.68856 12.8241 9.40911 13.1643 9.21507C13.5046 9.02102 13.8878 8.91881 14.2777 8.91813C14.7009 8.91607 15.1163 9.03416 15.4775 9.25918C15.8386 9.4842 16.1311 9.80727 16.3223 10.1922C16.499 10.5479 16.5832 10.9438 16.5671 11.3421C16.551 11.7404 16.4349 12.1279 16.2301 12.4675C16.0253 12.8072 15.7386 13.0876 15.3972 13.2821C15.0558 13.4766 14.6712 13.5787 14.2802 13.5786C13.856 13.58 13.4398 13.4607 13.0786 13.234ZM30.1701 9.30799C30.3362 9.22253 30.4737 9.08879 30.5653 8.92367C30.6569 8.75855 30.6984 8.56946 30.6846 8.3803C30.6708 8.19114 30.6022 8.0104 30.4877 7.86092C30.3732 7.71143 30.2177 7.59992 30.041 7.54047C29.8643 7.48102 29.6743 7.47631 29.495 7.52692C29.3156 7.57752 29.1551 7.68119 29.0335 7.82481C28.912 7.96843 28.8349 8.14556 28.8121 8.33381C28.7893 8.52206 28.8217 8.71298 28.9053 8.88245C29.0177 9.10975 29.2141 9.28224 29.4513 9.36203C29.6884 9.44182 29.947 9.42238 30.1701 9.30799ZM23.8044 10.5997C23.9355 10.3638 24.1322 10.1727 24.3698 10.0508C24.5275 9.96963 24.6993 9.92097 24.8755 9.9076C25.0516 9.89423 25.2286 9.9164 25.3964 9.97285C25.5641 10.0293 25.7193 10.1189 25.853 10.2366C25.9867 10.3542 26.0964 10.4976 26.1757 10.6585C26.2954 10.9007 26.3419 11.1735 26.3094 11.4426C26.2769 11.7118 26.1668 11.965 25.9931 12.1703C25.8195 12.3757 25.59 12.5239 25.3336 12.5963C25.0773 12.6687 24.8057 12.6619 24.5531 12.5769C24.3006 12.4919 24.0784 12.3325 23.9147 12.1188C23.751 11.9051 23.6532 11.6467 23.6335 11.3763C23.6139 11.1059 23.6734 10.8357 23.8044 10.5997ZM17.6469 7.76702C17.4179 7.90472 17.154 7.97011 16.8885 7.95494C16.5322 7.93424 16.1986 7.77015 15.9609 7.49874C15.7233 7.22733 15.6011 6.87083 15.6212 6.50761C15.6365 6.237 15.7301 5.97707 15.8902 5.76067C16.0503 5.54427 16.2697 5.38112 16.5208 5.29183C16.7719 5.20254 17.0432 5.19112 17.3007 5.25903C17.5581 5.32693 17.79 5.4711 17.967 5.67331C18.1441 5.87553 18.2584 6.12672 18.2954 6.39513C18.3325 6.66354 18.2907 6.93712 18.1752 7.18131C18.0598 7.42549 17.876 7.62932 17.6469 7.76702ZM9.60219 21.9492C9.83971 21.8271 10.0364 21.636 10.1673 21.4C10.2983 21.164 10.3576 20.8936 10.3378 20.6232C10.3181 20.3528 10.2201 20.0945 10.0563 19.8808C9.89246 19.6672 9.67017 19.5079 9.41753 19.423C9.16489 19.3382 8.89325 19.3316 8.63695 19.4042C8.38066 19.4768 8.15122 19.6252 7.97768 19.8307C7.80413 20.0362 7.69426 20.2895 7.66196 20.5587C7.62967 20.8278 7.6764 21.1007 7.79624 21.3428C7.95689 21.6673 8.23738 21.9134 8.57604 22.0272C8.9147 22.1409 9.2838 22.1128 9.60219 21.9492ZM17.3905 11.4225C17.3492 10.9054 17.4782 10.3891 17.7571 9.95522C17.9656 9.63129 18.2499 9.36536 18.5844 9.18142C18.9189 8.99748 19.293 8.9013 19.673 8.90157C20.1819 8.90224 20.676 9.07589 21.0772 9.39504C21.4784 9.7142 21.7637 10.1606 21.888 10.6637C22.0123 11.1667 21.9684 11.6977 21.7634 12.1725C21.5584 12.6472 21.2039 13.0388 20.756 13.2851C20.3081 13.5314 19.7925 13.6184 19.2907 13.5323C18.7888 13.4462 18.3295 13.192 17.9853 12.8099C17.6412 12.4278 17.4319 11.9395 17.3905 11.4225ZM21.7339 19.7056C21.5507 19.3352 21.2738 19.0213 20.9319 18.7964C20.5899 18.5714 20.1953 18.4436 19.7887 18.426C19.3821 18.4084 18.9783 18.5017 18.6189 18.6963C18.2595 18.8909 17.9576 19.1798 17.7442 19.533C17.5308 19.8863 17.4138 20.2912 17.4052 20.706C17.3966 21.1207 17.4966 21.5303 17.6951 21.8925C17.8936 22.2547 18.1833 22.5563 18.5343 22.7663C18.8852 22.9762 19.2848 23.0869 19.6918 23.0869C20.0498 23.0844 20.4023 22.9972 20.7216 22.8321C21.2617 22.5534 21.6714 22.068 21.8612 21.482C22.0509 20.896 22.0052 20.2573 21.7339 19.7056ZM24.9818 19.3177C25.2478 19.3155 25.5084 19.3937 25.7308 19.5425C26.0284 19.7425 26.2362 20.0545 26.3085 20.4104C26.3809 20.7662 26.312 21.1367 26.117 21.4409C25.971 21.6675 25.7624 21.845 25.5175 21.9507C25.2726 22.0565 25.0024 22.0859 24.7412 22.0352C24.4799 21.9845 24.2393 21.8559 24.0497 21.6657C23.8601 21.4756 23.73 21.2324 23.676 20.9669C23.622 20.7014 23.6465 20.4256 23.7462 20.1742C23.846 19.9229 24.0167 19.7074 24.2366 19.5549C24.4565 19.4024 24.7159 19.3199 24.9818 19.3177ZM30.1101 16.0401C30.1228 15.8102 30.0684 15.5817 29.9537 15.3833C29.839 15.1849 29.6692 15.0256 29.4657 14.9256C29.2623 14.8256 29.0343 14.7893 28.8106 14.8214C28.587 14.8534 28.3776 14.9523 28.2091 15.1056C28.0405 15.2589 27.9204 15.4597 27.8637 15.6826C27.8071 15.9055 27.8166 16.1406 27.891 16.358C27.9653 16.5754 28.1013 16.7655 28.2816 16.9041C28.4619 17.0428 28.6785 17.1239 28.904 17.1371C29.2066 17.1545 29.5036 17.0487 29.7297 16.843C29.9559 16.6374 30.0927 16.3486 30.1101 16.0401ZM32.857 15.3135C32.9831 15.2379 33.1284 15.2021 33.2745 15.2107C33.4703 15.2225 33.6535 15.313 33.784 15.4622C33.9145 15.6115 33.9816 15.8074 33.9707 16.007C33.9623 16.1559 33.9107 16.299 33.8226 16.4181C33.7344 16.5371 33.6136 16.6269 33.4754 16.676C33.3372 16.725 33.1879 16.7312 33.0462 16.6938C32.9046 16.6563 32.777 16.5769 32.6797 16.4655C32.5823 16.3542 32.5195 16.2159 32.4993 16.0681C32.479 15.9204 32.5022 15.7698 32.5659 15.6355C32.6295 15.5012 32.7308 15.3892 32.857 15.3135ZM30.295 22.6894C30.1394 22.5855 29.9569 22.5309 29.7708 22.5327C29.5848 22.5344 29.4033 22.5923 29.2495 22.6991C29.0957 22.8059 28.9765 22.9568 28.9068 23.1327C28.8371 23.3086 28.8201 23.5017 28.858 23.6874C28.8959 23.8731 28.987 24.0432 29.1197 24.1762C29.2525 24.3092 29.4209 24.3991 29.6037 24.4345C29.7865 24.4699 29.9756 24.4493 30.1469 24.3752C30.3182 24.3011 30.4641 24.1769 30.5662 24.0183C30.6341 23.9129 30.6809 23.7949 30.7039 23.6711C30.727 23.5472 30.7259 23.42 30.7008 23.2966C30.6756 23.1732 30.6268 23.056 30.5572 22.9518C30.4875 22.8477 30.3985 22.7585 30.295 22.6894ZM8.88647 29.6075C9.03278 29.6063 9.17616 29.6493 9.2985 29.7311C9.37976 29.7855 9.44972 29.8557 9.50438 29.9376C9.55904 30.0195 9.59733 30.1116 9.61706 30.2086C9.63679 30.3057 9.63757 30.4057 9.61937 30.503C9.60116 30.6003 9.56433 30.6931 9.51096 30.7759C9.43062 30.9005 9.31583 30.9981 9.1811 31.0563C9.04636 31.1145 8.89774 31.1306 8.75401 31.1026C8.61028 31.0747 8.4779 31.004 8.37362 30.8993C8.26933 30.7947 8.19781 30.6609 8.16811 30.5149C8.13841 30.3688 8.15185 30.2171 8.20674 30.0788C8.26164 29.9405 8.35551 29.822 8.4765 29.7381C8.59748 29.6542 8.74015 29.6088 8.88647 29.6075ZM24.8059 29.6522C24.6753 29.7193 24.567 29.8245 24.495 29.9543C24.4229 30.0842 24.3903 30.2329 24.4011 30.3816C24.412 30.5304 24.4659 30.6726 24.556 30.7901C24.6461 30.9077 24.7684 30.9953 24.9074 31.042C25.0464 31.0887 25.1958 31.0924 25.3368 31.0525C25.4778 31.0126 25.6041 30.9309 25.6996 30.8179C25.7951 30.7048 25.8555 30.5655 25.8733 30.4174C25.8911 30.2693 25.8654 30.1192 25.7995 29.986C25.7559 29.8974 25.6956 29.8186 25.622 29.7538C25.5484 29.6891 25.463 29.6399 25.3707 29.6088C25.2784 29.5778 25.181 29.5657 25.0841 29.5731C24.9872 29.5806 24.8927 29.6074 24.8059 29.6522ZM16.5789 20.5735C16.6203 21.0906 16.4913 21.607 16.2123 22.041C16.0049 22.3656 15.721 22.6321 15.3865 22.8161C15.0521 23.0002 14.6777 23.0959 14.2977 23.0946C13.7887 23.0942 13.2945 22.9208 12.8931 22.6018C12.4917 22.2828 12.2062 21.8365 12.0817 21.3334C11.9572 20.8304 12.0009 20.2993 12.2058 19.8244C12.4107 19.3495 12.7651 18.9578 13.2129 18.7114C13.6608 18.4649 14.1764 18.3778 14.6783 18.4638C15.1802 18.5497 15.6397 18.8039 15.9839 19.186C16.3281 19.5682 16.5375 20.0564 16.5789 20.5735ZM11.6419 25.6198C11.4528 25.4937 11.2314 25.4276 11.0055 25.4298C10.7797 25.432 10.5595 25.5025 10.3729 25.6322C10.1863 25.7619 10.0416 25.9452 9.9571 26.1587C9.87261 26.3723 9.85213 26.6066 9.89824 26.832C9.94435 27.0574 10.055 27.2638 10.2162 27.4251C10.3773 27.5865 10.5818 27.6955 10.8037 27.7384C11.0257 27.7813 11.2551 27.7561 11.463 27.6661C11.6709 27.5761 11.848 27.4253 11.9718 27.2327C12.1377 26.9742 12.1961 26.6591 12.1343 26.3566C12.0724 26.0542 11.8953 25.7892 11.6419 25.6198ZM16.4438 30.2139C16.6042 30.1177 16.7889 30.072 16.9747 30.0828C17.0982 30.09 17.219 30.1219 17.3303 30.1766C17.4417 30.2314 17.5414 30.308 17.6236 30.4021C17.7059 30.4962 17.7692 30.6058 17.8099 30.7248C17.8506 30.8438 17.8679 30.9699 17.8608 31.0957C17.8501 31.2851 17.7846 31.467 17.6725 31.6185C17.5604 31.7699 17.4068 31.8841 17.2311 31.9465C17.0553 32.009 16.8654 32.0169 16.6852 31.9693C16.5051 31.9217 16.3428 31.8208 16.2189 31.6792C16.0951 31.5376 16.0152 31.3617 15.9893 31.1738C15.9635 30.986 15.9928 30.7945 16.0737 30.6236C16.1546 30.4528 16.2834 30.3102 16.4438 30.2139ZM16.9847 24.0463C16.719 24.0298 16.4545 24.0941 16.2247 24.2311C15.9948 24.368 15.81 24.5714 15.6937 24.8154C15.5773 25.0595 15.5346 25.3333 15.571 25.6021C15.6074 25.8709 15.7212 26.1227 15.8981 26.3255C16.075 26.5283 16.3069 26.673 16.5645 26.7414C16.8222 26.8097 17.0939 26.7986 17.3453 26.7094C17.5967 26.6201 17.8165 26.4569 17.9768 26.2402C18.1371 26.0236 18.2307 25.7633 18.2458 25.4924C18.2663 25.1302 18.145 24.7746 17.9086 24.5035C17.6722 24.2324 17.3399 24.068 16.9847 24.0463ZM22.0055 25.9953C22.1164 25.7942 22.2833 25.6311 22.4851 25.5268C22.6187 25.4573 22.7645 25.4153 22.9141 25.4033C23.0637 25.3913 23.2141 25.4095 23.3567 25.4568C23.4994 25.5042 23.6315 25.5797 23.7455 25.6792C23.8595 25.7786 23.9531 25.9 24.0211 26.0364C24.1239 26.2419 24.1647 26.4738 24.1382 26.7029C24.1117 26.932 24.0191 27.1479 23.8722 27.3234C23.7252 27.4988 23.5305 27.6259 23.3127 27.6884C23.0949 27.751 22.8638 27.7463 22.6486 27.6749C22.4334 27.6035 22.2438 27.4686 22.1039 27.2874C21.9639 27.1061 21.8799 26.8866 21.8624 26.6566C21.8449 26.4266 21.8947 26.1964 22.0055 25.9953Z"
                        fill="#2F66F2"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_4471_18246">
                        <rect width="144" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <svg
                className="logo__mob"
                width={34}
                height={32}
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_4471_23323)">
                    <path
                        fillRule="evenodd" clipRule="evenodd" d="M16.8985 1.91718C17.0844 1.92797 17.2692 1.88233 17.4296 1.78602C17.59 1.68971 17.7188 1.54707 17.7997 1.37613C17.8805 1.2052 17.9099 1.01365 17.8839 0.825725C17.858 0.637798 17.778 0.461933 17.654 0.320378C17.53 0.178822 17.3676 0.0779351 17.1873 0.0304792C17.0071 -0.0169768 16.8171 -0.00886972 16.6414 0.0537748C16.4656 0.116419 16.3121 0.230787 16.2001 0.38241C16.0882 0.534033 16.0228 0.716099 16.0124 0.905578C15.9984 1.15949 16.0839 1.40867 16.25 1.59836C16.4162 1.78804 16.6494 1.90272 16.8985 1.91718ZM25.0845 2.39223C24.9381 2.39357 24.7946 2.35062 24.6722 2.26882C24.5082 2.15925 24.3936 1.98782 24.3536 1.79217C24.3135 1.59652 24.3512 1.39266 24.4585 1.22536C24.5386 1.10046 24.6532 1.00258 24.7879 0.944102C24.9225 0.885626 25.0712 0.869184 25.215 0.896857C25.3589 0.924531 25.4914 0.995075 25.5959 1.09956C25.7004 1.20405 25.7722 1.33779 25.8021 1.48386C25.832 1.62993 25.8188 1.78176 25.764 1.92015C25.7092 2.05853 25.6155 2.17725 25.4945 2.26128C25.3735 2.34532 25.2308 2.39089 25.0845 2.39223ZM9.16352 2.3478C9.29338 2.27982 9.40062 2.17419 9.47172 2.04421C9.54282 1.91424 9.57462 1.76572 9.5631 1.61736C9.55159 1.46901 9.49728 1.32744 9.40701 1.21048C9.31674 1.09352 9.19454 1.00639 9.05581 0.960076C8.91707 0.913757 8.76799 0.910314 8.62734 0.950179C8.48669 0.990043 8.36075 1.07143 8.26537 1.18411C8.17 1.29678 8.10946 1.4357 8.09136 1.58337C8.07326 1.73104 8.09843 1.88087 8.16368 2.014C8.20755 2.10311 8.26828 2.18249 8.34238 2.24756C8.41648 2.31263 8.50248 2.3621 8.59542 2.39313C8.68836 2.42416 8.78641 2.43613 8.88391 2.42835C8.98141 2.42057 9.07644 2.3932 9.16352 2.3478ZM9.88506 17.5675C9.48105 17.105 9.27367 16.4979 9.3085 15.8796L9.30225 15.8809C9.32788 15.4263 9.48351 14.9893 9.74994 14.6239C10.0164 14.2584 10.3819 13.9805 10.8015 13.8244C11.2211 13.6683 11.6764 13.6409 12.1111 13.7455C12.5458 13.8501 12.9409 14.0822 13.2477 14.4131C13.5545 14.744 13.7596 15.1592 13.8376 15.6075C13.9156 16.0559 13.8631 16.5177 13.6866 16.9359C13.5101 17.3542 13.2173 17.7106 12.8444 17.9613C12.4715 18.2119 12.0348 18.3457 11.5881 18.3462H11.4631C10.8567 18.31 10.2891 18.03 9.88506 17.5675ZM0.36335 15.3917C0.489135 15.316 0.634093 15.2801 0.779904 15.2884C0.8769 15.2938 0.971901 15.3186 1.05945 15.3615C1.14699 15.4044 1.22536 15.4646 1.29005 15.5384C1.35474 15.6123 1.40447 15.6985 1.43639 15.792C1.4683 15.8855 1.48178 15.9846 1.47604 16.0834C1.46766 16.232 1.41624 16.3748 1.32829 16.4937C1.24034 16.6125 1.11981 16.7021 0.981919 16.7512C0.844029 16.8002 0.694975 16.8065 0.553592 16.7692C0.41221 16.7319 0.284846 16.6527 0.187595 16.5416C0.0903451 16.4306 0.0275736 16.2926 0.00721378 16.1452C-0.013146 15.9978 0.00981979 15.8475 0.0732088 15.7134C0.136598 15.5793 0.237565 15.4673 0.36335 15.3917ZM11.9643 6.00671C11.8531 6.20716 11.6861 6.3695 11.4844 6.47322C11.3504 6.54212 11.2044 6.58343 11.0547 6.59479C10.9051 6.60615 10.7547 6.58733 10.6121 6.53941C10.4696 6.49149 10.3377 6.41541 10.2241 6.31552C10.1104 6.21562 10.0171 6.09387 9.94965 5.95722C9.84806 5.75154 9.80857 5.51978 9.83617 5.29123C9.86378 5.06267 9.95723 4.8476 10.1047 4.67318C10.2522 4.49876 10.4471 4.37284 10.6648 4.31133C10.8825 4.24983 11.1132 4.25549 11.3277 4.32762C11.5422 4.39974 11.731 4.53509 11.87 4.71655C12.0091 4.898 12.0923 5.11742 12.1091 5.34706C12.1258 5.5767 12.0755 5.80626 11.9643 6.00671ZM3.67442 9.31056C3.82999 9.41485 4.0124 9.46975 4.19858 9.46832C4.38477 9.4669 4.56635 9.4092 4.72036 9.30254C4.87437 9.19588 4.99388 9.04505 5.06377 8.86913C5.13367 8.69321 5.1508 8.5001 5.11301 8.31425C5.07522 8.1284 4.9842 7.95815 4.85146 7.82505C4.71873 7.69195 4.55025 7.60197 4.36734 7.56651C4.18443 7.53105 3.99532 7.55169 3.82392 7.62582C3.65252 7.69996 3.50655 7.82426 3.40447 7.98299C3.26775 8.19558 3.21939 8.4548 3.27 8.70371C3.32062 8.95263 3.46607 9.17089 3.67442 9.31056ZM4.4211 15.0236C4.6157 14.9067 4.83993 14.8512 5.06545 14.8642C5.36801 14.8819 5.65129 15.0214 5.85306 15.2519C6.05483 15.4824 6.15858 15.7852 6.14152 16.0936C6.12856 16.3235 6.04903 16.5443 5.91299 16.7281C5.77695 16.912 5.59051 17.0505 5.37723 17.1264C5.16395 17.2022 4.93341 17.2118 4.71474 17.1541C4.49608 17.0964 4.29911 16.9739 4.14873 16.8021C3.99835 16.6303 3.90132 16.4168 3.86989 16.1888C3.83846 15.9608 3.87405 15.7284 3.97217 15.521C4.07028 15.3136 4.22651 15.1405 4.4211 15.0236ZM3.79941 22.6933C3.63332 22.7788 3.49585 22.9127 3.40436 23.0779C3.31288 23.2431 3.2715 23.4322 3.28545 23.6214C3.2994 23.8106 3.36806 23.9913 3.48274 24.1407C3.59742 24.2901 3.75298 24.4015 3.92975 24.4608C4.10652 24.5201 4.29657 24.5246 4.47587 24.4738C4.65517 24.423 4.81567 24.3192 4.93709 24.1754C5.05851 24.0317 5.13539 23.8544 5.15802 23.6661C5.18064 23.4778 5.14799 23.2869 5.0642 23.1175C5.00852 23.005 4.93163 22.9047 4.83792 22.8224C4.74421 22.7402 4.63552 22.6776 4.51805 22.6382C4.40059 22.5988 4.27666 22.5834 4.15336 22.5928C4.03005 22.6023 3.90977 22.6364 3.79941 22.6933ZM8.98899 12.6817C8.72305 12.6841 8.46237 12.6061 8.23993 12.4575C8.09207 12.3589 7.96473 12.2315 7.86521 12.0827C7.76569 11.9339 7.69594 11.7665 7.65995 11.5902C7.62397 11.4139 7.62245 11.232 7.65549 11.0551C7.68852 10.8782 7.75547 10.7096 7.85249 10.5591C7.99833 10.3324 8.20685 10.1548 8.45166 10.0489C8.69648 9.943 8.96662 9.91346 9.2279 9.96403C9.48919 10.0146 9.7299 10.143 9.9196 10.3331C10.1093 10.5231 10.2395 10.7662 10.2936 11.0316C10.3478 11.2971 10.3236 11.5729 10.2239 11.8243C10.1243 12.0757 9.95385 12.2913 9.73403 12.4439C9.51421 12.5965 9.25494 12.6793 8.98899 12.6817ZM22.3276 6.38147C22.517 6.50742 22.7388 6.57329 22.9649 6.57076C23.191 6.56824 23.4113 6.49744 23.598 6.3673C23.7846 6.23716 23.9292 6.05353 24.0135 5.83963C24.0978 5.62572 24.118 5.39115 24.0715 5.16554C24.0251 4.93994 23.914 4.73345 23.7525 4.57216C23.5909 4.41088 23.3861 4.30204 23.1638 4.25941C22.9416 4.21678 22.712 4.24227 22.504 4.33266C22.2959 4.42305 22.1189 4.57429 21.9952 4.76724C21.9128 4.89541 21.856 5.03889 21.8281 5.18947C21.8003 5.34004 21.8018 5.49474 21.8327 5.6447C21.8636 5.79466 21.9232 5.93694 22.0081 6.06337C22.093 6.1898 22.2016 6.2979 22.3276 6.38147ZM22.5076 13.6602C22.2076 13.6426 21.9072 13.6854 21.6235 13.7862C21.3398 13.887 21.0784 14.0438 20.8541 14.2475C20.4012 14.6591 20.1271 15.2372 20.0923 15.8547C20.0575 16.4723 20.2648 17.0786 20.6685 17.5403C21.0722 18.0021 21.6394 18.2814 22.2451 18.3169H22.3776C22.8189 18.3167 23.2507 18.1863 23.6209 17.9415C23.9911 17.6968 24.284 17.3481 24.4642 16.9374C24.6444 16.5268 24.7042 16.0718 24.6365 15.6273C24.5687 15.1828 24.3763 14.7678 24.0823 14.4323C23.8832 14.2034 23.6415 14.0173 23.3711 13.8848C23.1007 13.7522 22.8072 13.6759 22.5076 13.6602ZM13.0786 13.234C12.7174 13.0073 12.4254 12.6823 12.2355 12.2957C12.0609 11.9403 11.9783 11.5454 11.9954 11.1483C12.0126 10.7512 12.1289 10.3652 12.3335 10.0269C12.5381 9.68856 12.8241 9.40911 13.1643 9.21507C13.5046 9.02102 13.8878 8.91881 14.2777 8.91813C14.7009 8.91607 15.1163 9.03416 15.4775 9.25918C15.8386 9.4842 16.1311 9.80727 16.3223 10.1922C16.499 10.5479 16.5832 10.9438 16.5671 11.3421C16.551 11.7404 16.4349 12.1279 16.2301 12.4675C16.0253 12.8072 15.7386 13.0876 15.3972 13.2821C15.0558 13.4766 14.6712 13.5787 14.2802 13.5786C13.856 13.58 13.4398 13.4607 13.0786 13.234ZM30.1701 9.30799C30.3362 9.22253 30.4737 9.08879 30.5653 8.92367C30.6569 8.75855 30.6984 8.56946 30.6846 8.3803C30.6708 8.19114 30.6022 8.0104 30.4877 7.86092C30.3732 7.71143 30.2177 7.59992 30.041 7.54047C29.8643 7.48102 29.6743 7.47631 29.495 7.52692C29.3156 7.57752 29.1551 7.68119 29.0335 7.82481C28.912 7.96843 28.8349 8.14556 28.8121 8.33381C28.7893 8.52206 28.8217 8.71298 28.9053 8.88245C29.0177 9.10975 29.2141 9.28224 29.4513 9.36203C29.6884 9.44182 29.947 9.42238 30.1701 9.30799ZM23.8044 10.5997C23.9355 10.3638 24.1322 10.1727 24.3698 10.0508C24.5275 9.96963 24.6993 9.92097 24.8755 9.9076C25.0516 9.89423 25.2286 9.9164 25.3964 9.97285C25.5641 10.0293 25.7193 10.1189 25.853 10.2366C25.9867 10.3542 26.0964 10.4976 26.1757 10.6585C26.2954 10.9007 26.3419 11.1735 26.3094 11.4426C26.2769 11.7118 26.1668 11.965 25.9931 12.1703C25.8195 12.3757 25.59 12.5239 25.3336 12.5963C25.0773 12.6687 24.8057 12.6619 24.5531 12.5769C24.3006 12.4919 24.0784 12.3325 23.9147 12.1188C23.751 11.9051 23.6532 11.6467 23.6335 11.3763C23.6139 11.1059 23.6734 10.8357 23.8044 10.5997ZM17.6469 7.76702C17.4179 7.90472 17.154 7.97011 16.8885 7.95494C16.5322 7.93424 16.1986 7.77015 15.9609 7.49874C15.7233 7.22733 15.6011 6.87083 15.6212 6.50761C15.6365 6.237 15.7301 5.97707 15.8902 5.76067C16.0503 5.54427 16.2697 5.38112 16.5208 5.29183C16.7719 5.20254 17.0432 5.19112 17.3007 5.25903C17.5581 5.32693 17.79 5.4711 17.967 5.67331C18.1441 5.87553 18.2584 6.12672 18.2954 6.39513C18.3325 6.66354 18.2907 6.93712 18.1752 7.18131C18.0598 7.42549 17.876 7.62932 17.6469 7.76702ZM9.60219 21.9492C9.83971 21.8271 10.0364 21.636 10.1673 21.4C10.2983 21.164 10.3576 20.8936 10.3378 20.6232C10.3181 20.3528 10.2201 20.0945 10.0563 19.8808C9.89246 19.6672 9.67017 19.5079 9.41753 19.423C9.16489 19.3382 8.89325 19.3316 8.63695 19.4042C8.38066 19.4768 8.15122 19.6252 7.97768 19.8307C7.80413 20.0362 7.69426 20.2895 7.66196 20.5587C7.62967 20.8278 7.6764 21.1007 7.79624 21.3428C7.95689 21.6673 8.23738 21.9134 8.57604 22.0272C8.9147 22.1409 9.2838 22.1128 9.60219 21.9492ZM17.3905 11.4225C17.3492 10.9054 17.4782 10.3891 17.7571 9.95522C17.9656 9.63129 18.2499 9.36536 18.5844 9.18142C18.9189 8.99748 19.293 8.9013 19.673 8.90157C20.1819 8.90224 20.676 9.07589 21.0772 9.39504C21.4784 9.7142 21.7637 10.1606 21.888 10.6637C22.0123 11.1667 21.9684 11.6977 21.7634 12.1725C21.5584 12.6472 21.2039 13.0388 20.756 13.2851C20.3081 13.5314 19.7925 13.6184 19.2907 13.5323C18.7888 13.4462 18.3295 13.192 17.9853 12.8099C17.6412 12.4278 17.4319 11.9395 17.3905 11.4225ZM21.7339 19.7056C21.5507 19.3352 21.2738 19.0213 20.9319 18.7964C20.5899 18.5714 20.1953 18.4436 19.7887 18.426C19.3821 18.4084 18.9783 18.5017 18.6189 18.6963C18.2595 18.8909 17.9576 19.1798 17.7442 19.533C17.5308 19.8863 17.4138 20.2912 17.4052 20.706C17.3966 21.1207 17.4966 21.5303 17.6951 21.8925C17.8936 22.2547 18.1833 22.5563 18.5343 22.7663C18.8852 22.9762 19.2848 23.0869 19.6918 23.0869C20.0498 23.0844 20.4023 22.9972 20.7216 22.8321C21.2617 22.5534 21.6714 22.068 21.8612 21.482C22.0509 20.896 22.0052 20.2573 21.7339 19.7056ZM24.9818 19.3177C25.2478 19.3155 25.5084 19.3937 25.7308 19.5425C26.0284 19.7425 26.2362 20.0545 26.3085 20.4104C26.3809 20.7662 26.312 21.1367 26.117 21.4409C25.971 21.6675 25.7624 21.845 25.5175 21.9507C25.2726 22.0565 25.0024 22.0859 24.7412 22.0352C24.4799 21.9845 24.2393 21.8559 24.0497 21.6657C23.8601 21.4756 23.73 21.2324 23.676 20.9669C23.622 20.7014 23.6465 20.4256 23.7462 20.1742C23.846 19.9229 24.0167 19.7074 24.2366 19.5549C24.4565 19.4024 24.7159 19.3199 24.9818 19.3177ZM30.1101 16.0401C30.1228 15.8102 30.0684 15.5817 29.9537 15.3833C29.839 15.1849 29.6692 15.0256 29.4657 14.9256C29.2623 14.8256 29.0343 14.7893 28.8106 14.8214C28.587 14.8534 28.3776 14.9523 28.2091 15.1056C28.0405 15.2589 27.9204 15.4597 27.8637 15.6826C27.8071 15.9055 27.8166 16.1406 27.891 16.358C27.9653 16.5754 28.1013 16.7655 28.2816 16.9041C28.4619 17.0428 28.6785 17.1239 28.904 17.1371C29.2066 17.1545 29.5036 17.0487 29.7297 16.843C29.9559 16.6374 30.0927 16.3486 30.1101 16.0401ZM32.857 15.3135C32.9831 15.2379 33.1284 15.2021 33.2745 15.2107C33.4703 15.2225 33.6535 15.313 33.784 15.4622C33.9145 15.6115 33.9816 15.8074 33.9707 16.007C33.9623 16.1559 33.9107 16.299 33.8226 16.4181C33.7344 16.5371 33.6136 16.6269 33.4754 16.676C33.3372 16.725 33.1879 16.7312 33.0462 16.6938C32.9046 16.6563 32.777 16.5769 32.6797 16.4655C32.5823 16.3542 32.5195 16.2159 32.4993 16.0681C32.479 15.9204 32.5022 15.7698 32.5659 15.6355C32.6295 15.5012 32.7308 15.3892 32.857 15.3135ZM30.295 22.6894C30.1394 22.5855 29.9569 22.5309 29.7708 22.5327C29.5848 22.5344 29.4033 22.5923 29.2495 22.6991C29.0957 22.8059 28.9765 22.9568 28.9068 23.1327C28.8371 23.3086 28.8201 23.5017 28.858 23.6874C28.8959 23.8731 28.987 24.0432 29.1197 24.1762C29.2525 24.3092 29.4209 24.3991 29.6037 24.4345C29.7865 24.4699 29.9756 24.4493 30.1469 24.3752C30.3182 24.3011 30.4641 24.1769 30.5662 24.0183C30.6341 23.9129 30.6809 23.7949 30.7039 23.6711C30.727 23.5472 30.7259 23.42 30.7008 23.2966C30.6756 23.1732 30.6268 23.056 30.5572 22.9518C30.4875 22.8477 30.3985 22.7585 30.295 22.6894ZM8.88647 29.6075C9.03278 29.6063 9.17616 29.6493 9.2985 29.7311C9.37976 29.7855 9.44972 29.8557 9.50438 29.9376C9.55904 30.0195 9.59733 30.1116 9.61706 30.2086C9.63679 30.3057 9.63757 30.4057 9.61937 30.503C9.60116 30.6003 9.56433 30.6931 9.51096 30.7759C9.43062 30.9005 9.31583 30.9981 9.1811 31.0563C9.04636 31.1145 8.89774 31.1306 8.75401 31.1026C8.61028 31.0747 8.4779 31.004 8.37362 30.8993C8.26933 30.7947 8.19781 30.6609 8.16811 30.5149C8.13841 30.3688 8.15185 30.2171 8.20674 30.0788C8.26164 29.9405 8.35551 29.822 8.4765 29.7381C8.59748 29.6542 8.74015 29.6088 8.88647 29.6075ZM24.8059 29.6522C24.6753 29.7193 24.567 29.8245 24.495 29.9543C24.4229 30.0842 24.3903 30.2329 24.4011 30.3816C24.412 30.5304 24.4659 30.6726 24.556 30.7901C24.6461 30.9077 24.7684 30.9953 24.9074 31.042C25.0464 31.0887 25.1958 31.0924 25.3368 31.0525C25.4778 31.0126 25.6041 30.9309 25.6996 30.8179C25.7951 30.7048 25.8555 30.5655 25.8733 30.4174C25.8911 30.2693 25.8654 30.1192 25.7995 29.986C25.7559 29.8974 25.6956 29.8186 25.622 29.7538C25.5484 29.6891 25.463 29.6399 25.3707 29.6088C25.2784 29.5778 25.181 29.5657 25.0841 29.5731C24.9872 29.5806 24.8927 29.6074 24.8059 29.6522ZM16.5789 20.5735C16.6203 21.0906 16.4913 21.607 16.2123 22.041C16.0049 22.3656 15.721 22.6321 15.3865 22.8161C15.0521 23.0002 14.6777 23.0959 14.2977 23.0946C13.7887 23.0942 13.2945 22.9208 12.8931 22.6018C12.4917 22.2828 12.2062 21.8365 12.0817 21.3334C11.9572 20.8304 12.0009 20.2993 12.2058 19.8244C12.4107 19.3495 12.7651 18.9578 13.2129 18.7114C13.6608 18.4649 14.1764 18.3778 14.6783 18.4638C15.1802 18.5497 15.6397 18.8039 15.9839 19.186C16.3281 19.5682 16.5375 20.0564 16.5789 20.5735ZM11.6419 25.6198C11.4528 25.4937 11.2314 25.4276 11.0055 25.4298C10.7797 25.432 10.5595 25.5025 10.3729 25.6322C10.1863 25.7619 10.0416 25.9452 9.9571 26.1587C9.87261 26.3723 9.85213 26.6066 9.89824 26.832C9.94435 27.0574 10.055 27.2638 10.2162 27.4251C10.3773 27.5865 10.5818 27.6955 10.8037 27.7384C11.0257 27.7813 11.2551 27.7561 11.463 27.6661C11.6709 27.5761 11.848 27.4253 11.9718 27.2327C12.1377 26.9742 12.1961 26.6591 12.1343 26.3566C12.0724 26.0542 11.8953 25.7892 11.6419 25.6198ZM16.4438 30.2139C16.6042 30.1177 16.7889 30.072 16.9747 30.0828C17.0982 30.09 17.219 30.1219 17.3303 30.1766C17.4417 30.2314 17.5414 30.308 17.6236 30.4021C17.7059 30.4962 17.7692 30.6058 17.8099 30.7248C17.8506 30.8438 17.8679 30.9699 17.8608 31.0957C17.8501 31.2851 17.7846 31.467 17.6725 31.6185C17.5604 31.7699 17.4068 31.8841 17.2311 31.9465C17.0553 32.009 16.8654 32.0169 16.6852 31.9693C16.5051 31.9217 16.3428 31.8208 16.2189 31.6792C16.0951 31.5376 16.0152 31.3617 15.9893 31.1738C15.9635 30.986 15.9928 30.7945 16.0737 30.6236C16.1546 30.4528 16.2834 30.3102 16.4438 30.2139ZM16.9847 24.0463C16.719 24.0298 16.4545 24.0941 16.2247 24.2311C15.9948 24.368 15.81 24.5714 15.6937 24.8154C15.5773 25.0595 15.5346 25.3333 15.571 25.6021C15.6074 25.8709 15.7212 26.1227 15.8981 26.3255C16.075 26.5283 16.3069 26.673 16.5645 26.7414C16.8222 26.8097 17.0939 26.7986 17.3453 26.7094C17.5967 26.6201 17.8165 26.4569 17.9768 26.2402C18.1371 26.0236 18.2307 25.7633 18.2458 25.4924C18.2663 25.1302 18.145 24.7746 17.9086 24.5035C17.6722 24.2324 17.3399 24.068 16.9847 24.0463ZM22.0055 25.9953C22.1164 25.7942 22.2833 25.6311 22.4851 25.5268C22.6187 25.4573 22.7645 25.4153 22.9141 25.4033C23.0637 25.3913 23.2141 25.4095 23.3567 25.4568C23.4994 25.5042 23.6315 25.5797 23.7455 25.6792C23.8595 25.7786 23.9531 25.9 24.0211 26.0364C24.1239 26.2419 24.1647 26.4738 24.1382 26.7029C24.1117 26.932 24.0191 27.1479 23.8722 27.3234C23.7252 27.4988 23.5305 27.6259 23.3127 27.6884C23.0949 27.751 22.8638 27.7463 22.6486 27.6749C22.4334 27.6035 22.2438 27.4686 22.1039 27.2874C21.9639 27.1061 21.8799 26.8866 21.8624 26.6566C21.8449 26.4266 21.8947 26.1964 22.0055 25.9953Z"
                        fill="#2F66F2"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_4471_23323">
                        <rect width="34" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}
