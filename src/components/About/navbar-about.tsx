import * as React from 'react';

function NavbarAbout() {
    return ( 
        <ul className="navbar-about nav org-nav" role="tablist">
            <li className="nav-item" role="navigation">
                <a className="nav-link active" id="tab-about-us" data-toggle="tab" href="#tab-ve-chung-toi" role="tab" aria-controls="tab-ve-chung-toi" aria-selected="false">Về chúng tôi</a>
            </li>
            <li className="nav-item" role="navigation">
                <a className="nav-link" id="tab-recruitment" data-toggle="tab" href="#tab-tuyen-dung" role="tab" aria-controls="tab-tuyen-dung" aria-selected="false">Tuyển dụng</a>
            </li>
        </ul>
    );
}

export default NavbarAbout;